const initialSate ={

}

export const Action = {
    Types:{
        SEARCH_PHOTOS: "search/SEARCH_PHOTOS",
    },
    Creators:{
        searchPhotos: (payload) => ({
            type: Action.Types.SEARCH_PHOTOS,
            payload
        })
    }
}

export const reducer = (state = initialSate, action) => {
    switch(action.type){
        default: return state;
    }
}