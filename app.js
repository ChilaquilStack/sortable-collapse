const app = new Vue({
    el: '#app',
    data:{
        users:[
            {
                id: 1,
                name: 'Jose',
                childs:[
                    {
                        id: 1, 
                        text:'Morbi leo risus'
                    },
                    {
                        id: 2,
                        text: 'Porta ac consectetur ac'
                    }
                ]
            },
            {
                id: 2,
                name: 'Pedro',
                childs:[
                    {
                        id: 1, 
                        text:'Cras justo odio'
                    },
                    {
                        id: 2,
                        text: 'Dapibus ac facilisis in'
                    }
                ]
            }
        ]
    },
    methods: {
        add(){
            this.users[0].childs.push({
                id: 3,
                text: 'Lorem ipsum'
            });
        }
    },
})