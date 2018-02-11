app.controller('SamenstellingController', SamenstellingController);
    
function SamenstellingController($scope) {
    $scope.instrumenten = [
        {
            soort : 'Sax', 
            muzikanten : [
                {naam: 'Hugo Christiaens'},
                {naam: 'Gerry Quintelier'},
                {naam: 'Danny Verleyen'},
                {naam: 'Willem De Clercq'},
                {naam: 'Georges Seghers'}
            ]
        },
        {
            soort : 'Trombone',
            muzikanten : [
                {naam: 'Raf Sterckx'},
                {naam: 'Eric Kiekens'},
                {naam: 'VACANT'}
            ]
        },
        {
            soort : 'Bastrombone',
            muzikanten : [
                {naam: 'Dirk Goubert'}
            ]
        },
        {
            soort : 'Trompet',
            muzikanten : [
                {naam: 'Lieven Decoster'},
                {naam: 'Stef Spiessens'},
                {naam: 'Walter Veyt'},
                {naam: 'Carmen Decoster'}
            ]
        },
        {
            soort : 'Drum',
            muzikanten : [
                {naam: 'Marnix De Boom'}
            ]
        },
        {
            soort : 'Gitaar',
            muzikanten : [
                {naam: 'Frankie Vander Slock'}
            ]
        },
        {
            soort : 'Bas',
            muzikanten : [
                {naam: 'Bart Van Isterdael'}
            ]
        },
        {
            soort : 'Piano',
            muzikanten : [
                {naam: 'Robbe Willems'}
            ]
        },
        {
            soort : 'Vocals',
            muzikanten : [
                {naam: 'Hugo Christiaens'}
            ]
        },
        {
            soort : 'Muzikale leiding',
            muzikanten : [
                {naam: 'Jos Vermeulen'}
            ]
        }

    ];
    $scope.muzikanten = [
        {title:'Voorziter',name:'Walter Veyt',email:'therenegades@outlook.com'},
        {title:'Dirigent',name:'Jos  Vermeulen',email:'joskenvermeulen@proximus.be'}
    ];
};