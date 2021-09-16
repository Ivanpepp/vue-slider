let app = new Vue({
        el:'#app',
        data: {
            images: [
                {
                    src: 'img/db43191e5c7703f61d993cc1747182c8.jpg',
                    alt: 'money don\'t make happy'
                },
                {
                    src: 'img/children-1822688_1920.jpg',
                    alt: 'children play football'
                },
                {
                    src: 'img/children-1822704_1920.jpg',
                    alt: 'children washing in the river'
                },
                {
                    src: 'img/black-2583771_1920.jpg',
                    alt: 'african child'
                },
                {
                    src: 'img/children-5833685_1920.jpg',
                    alt: 'children playing'
                },
                {
                    src: 'img/humanities-1531928_1920.jpg',
                    alt: 'children playing'
                },
                {
                    src: 'img/india-2507482_1920.jpg',
                    alt: 'indian childrens'
                },
            ],
            indexImg : 0,
        },
            methods: {
                immaginePrecedente: function(){
                    this.indexImg--;
                    if(this.indexImg < 0){
                        this.indexImg = this.images.length -1;
                    }
                },
                immagineSuccessiva: function(){
                    this.indexImg++;
                    if(this.indexImg >= this.images.length){
                        this.indexImg = 0;
                    }
                },
                goToImage : function(index){
                    this.indexImg = index;
                },
                
            },
            // created sarebbe quando vine creata l'istanza
           created : function(){
               const virtualMachine = this; // stiamo dicendo ti creamo nua variabile locale che equivale all'oggetto vue
            setInterval(function (){
                //perche se mettessi il this qui sarebbe windows, che e un concetto primitivo
                virtualMachine.immagineSuccessiva();
            },3000)
           }
    })