function demo() {

    // more substep more accurate simulation default set to 7
    //substep( 7 );

    cam ( 0, 10, 40 );

    load ( 'track', afterLoad );

};

function afterLoad () {

    add({type:'plane', friction:0.6, restitution:0.1 }); // infinie plane

    add({ type:'mesh', shape:view.getGeo()['track'], mass:0, friction:0.6, restitution:0.1 });

    // ammo car shape

    // ! \\ go on view and use keyboard to controle car

    car ({ 
        type:'box',
        name:'car',
        helper: true,
        pos:[0,1,0], // start position of car 
        rot:[0,90,0], // start rotation of car
        size:[ 1.6, 0.4, 3.6 ], // chassis size
        massCenter:[ 0, 0.6, 0 ], // local center of mass (best is on chassis bottom)

        friction: 0.6, 
        restitution: 0.0, 
        linearDamping: 0.3, 
        angularDamping: 0.3,

        radius:0.4,// wheels radius
        deep:0.3, // wheels deep only for three cylinder
        wPos:[1, 0.4, 1.6], // wheels position on chassis

        // car setting

        mass:600,// mass of vehicle in kg
        engine:1000, // Maximum driving force of the vehicle
        acceleration:10, // engine increment 

        // suspension setting

        // Damping relaxation should be slightly larger than compression
        s_compression: 2.4,// 0.1 to 0.3 are real values default 0.84
        s_relaxation: 2.8, // The damping coefficient for when the suspension is expanding. default : 0.88

        s_stiffness: 100,// 10 = Offroad buggy, 50 = Sports car, 200 = F1 Car 
        s_travel: 100, // The maximum distance the suspension can be compressed in Cm
        s_force: 10000, // Maximum suspension force
        s_length: 0.2,//0.1, // The maximum length of the suspension in meter

        // wheel setting

        // friction: The constant friction of the wheels on the surface.
        // For realistic TS It should be around 0.8. 
        // But may be greatly increased to improve controllability (1000 and more)
        // Set large (10000.0) for kart racers
        w_friction: 1000,
        // roll: reduces torque from the wheels
        // reducing vehicle barrel chance
        // 0 - no torque, 1 - the actual physical behavior
        w_roll: 0.01,


    });

    follow ('car');

};