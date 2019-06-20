import {API_URL} from '../utils/setting';

const settings = {
    state: {
        list_videos: []
    },
    reducers: {
        setState(state, payload) {
            state = {...state, ...payload};
            return {...state};
        },
    },
    effects: (dispatch) => ({
        getList(payload, rootState) {
            const _this = this;
            fetch(API_URL + '/video/list', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => res.json())
            .then(function (res) {
                if (res.success == 1) {
                    _this.setState({list_videos: res.data})
                }
                else {
                    console.log(res);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    })
};


export default settings;