const sandbox = 'HenningsAPIv2' //Byt denna mot er egna sandbox
const getCategoriesUrl = `https://forum-api-jkrop.ondigitalocean.app/sandbox/${sandbox}/category`;

export const categoryReducer = (state, action) => {
    switch(action.type) {
        case "POST_CATEGORY": return {...state, categories: [state.categories.concat(action.payload)]};
        case "GET_CATEGORIES": return {...state, categories: action.payload};
        default: return state;
    }
}

export const getCategoriesAsync = async (dispatch) => {
    const res = await fetch(getCategoriesUrl);
    const data = await res.json(); 
    dispatch({type: "GET_CATEGORIES", payload: data});
}

export const postCategoryAsync = async (body, dispatch) => {
    const res = await fetch(getCategoriesUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    dispatch({type: "POST_CATEGORY", payload: data });
}
