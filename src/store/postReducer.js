const defaultState = [
        {
            key: "Ivan",
            name: "Ivan",
            nickName: '@ivanchyk',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jackie_Chan_by_Gage_Skidmore.jpg/360px-Jackie_Chan_by_Gage_Skidmore.jpg',
            date: new Date().toLocaleDateString(),
            textPublication: 'Beach Sea Sunset Sun Sunlight Sand Coast',
            imagePublication:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
            likes: 15,
            valueLike: false,
            repost: 10,
            valueRepost: false,
            comments: 100,
            valueComments: false
        }, {
            key: "Petro",
            name: "Petro",
            nickName: '@petryk',
            avatar: 'https://m.media-amazon.com/images/M/MV5BMjExNzA4MDYxN15BMl5BanBnXkFtZTcwOTI1MDAxOQ@@._V1_.jpg',
            date: new Date().toLocaleDateString(),
            textPublication: ' Beach Sea Sunset Sun Sunlight Sand Coast',
            imagePublication:
                "https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg",
            likes: 5,
            valueLike: false,
            repost: 10,
            valueRepost: false,
            comments: 100,
            valueComments: false
        },

    ]


const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_USER": {
            return [...state, action.payload];
        }
        case "ADD_LIKE":
            state[action.payload].likes += 1;
            state[action.payload].valueLike = true;
            return [...state];

        case "REMOVE_LIKE": {

            state[action.payload].likes -= 1;
            state[action.payload].valueLike = false;
            return [...state];
        }
        case "ADD_REPOST": {

            state[action.payload].repost += 1;
            state[action.payload].valueRepost = true;
            return [...state];
        }
        case "REMOVE_REPOST": {

            state[action.payload].repost -= 1;
            state[action.payload].valueRepost = false;
            return [...state];
        }
        case "ADD_COMMENT": {

            state[action.payload].comments += 1;
            state[action.payload].valueComments = true;
            return [...state];
        }
        case "REMOVE_COMMENT": {

            state[action.payload].comments -= 1;
            state[action.payload].valueComments = false;
            return [...state];
        }
        default:
            return state;
    }
}

export default postReducer;