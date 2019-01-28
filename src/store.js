import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projects: [{
                title: 'Make the design',
                person: 'Muhammad Yasser',
                due: '01st Jan 2019',
                status: 'ongoing',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, amet.'
            },
            {
                title: 'Review the design with the client',
                person: 'Ahmed Hesham',
                due: '07th Jan 2019',
                status: 'complete',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, amet.'
            },
            {
                title: 'Write The Front End Logic',
                person: 'Belal El-Gendy',
                due: '08th Jan 2019',
                status: 'ongoing',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, amet.'
            },
            {
                title: 'Build the files',
                person: 'Zeina Shaker',
                due: '13rd Jan 2019',
                status: 'overdue',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, amet.'
            },
            {
                title: 'Write the Backend Logic',
                person: 'Caroline Ali',
                due: '17th Jan 2019',
                status: 'complete',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, amet.'
            },
            {
                title: 'Deploy the project',
                person: 'Khaled Zedan',
                due: '21st Jan 2019',
                status: 'overdue',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, amet.'
            }
        ]
    },
    mutations: {

    },
    actions: {

    }
})