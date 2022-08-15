const initialState = [
    {
        key: 'Taras',
        value: "Taras",
        label: "Taras",
        image: {
            src: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvc3R1ZGlvNzctbWNraW5zZXktNjMyNC1wYWlfMi5wbmc.png?s=CYgC0Xl6E1-Fa8hjsGnJwziywFtozlC_cvnBwm161CE",
        },
    },
    {
        key: 'Myhaylo',
        label: "Myhaylo",
        value: "Myhaylo",
        image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg",
        },
    }, {
        key: 'Natali',
        label: "Natali",
        value: "Natali",
        image: {
            src: "https://i.discogs.com/DkFHcm__zJXsSX3coLQRK9w2NYY0pIGUejVO-wVIBHE/rs:fit/g:sm/q:90/h:704/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ3Nzc5/MzYtMTUzOTM2MzQ3/NS00MjMzLmpwZWc.jpeg",
        },
    }, {
        key: 'Viktoria',
        label: "Viktoria",
        value: "Viktoria",
        image: {
            src: "https://img.freepik.com/free-photo/beautiful-female-with-blonde-long-hair-has-confident-expression-wears-casual-sweater-isolated-over-pink-wall-adorable-young-woman-has-attractive-look-poses-in-waist-up-shot_273609-2438.jpg?w=2000",
        },
    },];

const dropDownReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default dropDownReducer;