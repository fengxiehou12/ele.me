const state = {
    lon: null,
    lat: null,
    address: ''
};

const mutations = {
    modifyLon(state, param){
        state.lon = param;
    },
    modifyLat(state, param){
        state.lat = param;
    },
    modifyAddress(state, param){
        state.address = param;
    }
};

const actions = {
    initLocation(module){
        setTimeout(()=>{
            let lon = '113.844314';
            let lat = '22.631697';
            module.commit('modifyLon', lon);
            module.commit('modifyLat', lat);
        }, 300);
    },
    modifyAddressAction(module, param){
        module.commit('modifyAddress', param.address);
    },
    modifyLocationAction(module, param){
        module.commit('modifyLon', param.lon);
        module.commit('modifyLat', param.lat);
        module.commit('modifyAddress', param.address);
    }
};

const locationModule = {
    //拥有独立的命名空间
    namespaced: true,
    state,
    mutations,
    actions
}

export default locationModule;