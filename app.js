"use strict";

class CreateWorkout {
    constructor(exerciseName, type, level, equipment, length, userName) {
        this.exerciseName =
            typeof exerciseName == "string" ? exerciseName : "ERROR";

        this.type =
            (typeof type == "string" && type == "Upper Body") ||
            type == "Leg Killer" ||
            type == "Upper Body Cardio" ||
            type == "Lower Body" ||
            type == "Surprise me!"
                ? type
                : "This kind of workout is not available. Please choose between Upper Body, Upper Body Cardio, Lower Body, Leg Killer or Surprise Me.";

        this.level =
            (typeof level == "string" && level == "Beginner") ||
            level == "Intermediate" ||
            level == "Advanced" ||
            level == "Surprise Me"
                ? level
                : "This level is not available. Please choose between Beginner, Intermediate and Advanced.";

        this.equipment =
            (typeof equipment == "string" && equipment == "yes") ||
            // ? "Great! Let's create a workout with equipment for you!"
            // : "Do you have equipment for your workout?"
            equipment == "no"
                ? // ? "Don't worry! We will create a great workout without equipment for you!"
                  // : "Do you have equipment for your workout?";
                  equipment
                : "Do you have equipment for your workout?";

        this.length =
            typeof length == "number" && length == 10
                ? "HAVE FUN!"
                : "Please choose between 10, 20, 30 or 40 minutes." ||
                  length == 20
                ? "Do four total circuits to finish the workout"
                : "Please choose between 10, 20, 30 or 40 minutes." ||
                  length == 30
                ? "Do six total circuits to finish the workout"
                : "Please choose between 10, 20, 30 or 40 minutes." ||
                  length == 40
                ? "Do eight total circuits to finish the workout"
                : "Please choose between 10, 20, 30 or 40 minutes.";

        this.userName =
            typeof userName == "string" ? userName : "Please enter your name";
    }

    //#region
    // WORK IN PROGRESS
    chooseLevel() {
        let beginnerList = this.level.filter(
            (beginnerExercises) => beginnerExercises.level === "Beginner"
        );

        console.log(beginnerList);

        let beginnerString = " ";

        for (let beginnerObject of beginnerList) {
            beginnerString += `${beginnerObject.level}, `;
        }
        console.log(`The Beginner exercises are: ${beginnerString}`);
    }
    //#endregion

    // METHODS

    upperBodyWorkout() {
        // CREATE A WORKOUT THAT INCLUDES 10 RANDOM EXERCISES FROM THE upperBodyList (line 1260) AND IS LEVEL "Beginner" WHEN THE NEW CREATED INSTANCE HAS THE LEVEL "Beginner"
        // OR
        // CREATE A WORKOUT THAT INCLUDES 10 RANDOM EXERCISES FROM THE upperBodyList (line 1260) AND IS LEVEL "Intermediate" WHEN THE NEW CREATED INSTANCE HAS THE LEVEL "Intermediate"
        // OR
        // CREATE A WORKOUT THAT INCLUDES 10 RANDOM EXERCISES FROM THE upperBodyList (line 1260) AND IS LEVEL "Advanced" WHEN THE NEW CREATED INSTANCE HAS THE LEVEL "Advanced"
        let createdUpperBodyWorkoutBeg = [];
        let createdUpperBodyWorkoutInt = [];
        let createdUpperBodyWorkoutAdv = [];

        // Math.random() * (max - min) + min;
        // Max = array.length - 1
        // Min = 0
        // console.log(upperBodyList);
        for (let i = 0; i < 10; i++) {
            if (upperBodyListBeg.length > 1 && this.level == "Beginner") {
                let randomExercisesBeg = Math.floor(
                    Math.random() * (upperBodyListBeg.length - 1)
                );
                createdUpperBodyWorkoutBeg.push(
                    upperBodyListBeg[randomExercisesBeg]
                );
            }
            if (upperBodyListInt.length > 1 && this.level == "Intermediate") {
                let randomExercisesInt = Math.floor(
                    Math.random() * (upperBodyListInt.length - 1)
                );
                createdUpperBodyWorkoutInt.push(
                    upperBodyListInt[randomExercisesInt]
                );
            }
            if (upperBodyListAdv.length > 1 && this.level == "Advanced") {
                let randomExercisesAdv = Math.floor(
                    Math.random() * (upperBodyListAdv.length - 1)
                );
                createdUpperBodyWorkoutAdv.push(
                    upperBodyListAdv[randomExercisesAdv]
                );
            }
            // else {
            //     createdUpperBodyWorkout.push(upperBodyList[i]);
            // }
        }
        console.table(createdUpperBodyWorkoutBeg);
        console.table(createdUpperBodyWorkoutInt);
        console.table(createdUpperBodyWorkoutAdv);

        // Make a new string to hold the names of all Upper Body Beginner || Intermediate || Advanced exercises from the list
        let upperBodyExercisesStringBeg = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdUpperBodyWorkoutBeg) {
            upperBodyExercisesStringBeg += `
            - ${exercise.exerciseName}`;
        }
        let upperBodyExercisesStringInt = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdUpperBodyWorkoutInt) {
            upperBodyExercisesStringInt += `
            - ${exercise.exerciseName}`;
        }

        let upperBodyExercisesStringAdv = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdUpperBodyWorkoutAdv) {
            upperBodyExercisesStringAdv += `
            - ${exercise.exerciseName}`;
        }

        // Log the list of exercises, making sure to remove the final space and comma
        console.log(
            `           
            Hi ${this.userName}! Welcome to your ${this.type} ${this.level} workout!
            
            Complete each exercise listed below to finish one circuit. 
            Rest as little as necessary, then start the next circuit. 
            Do two total circuits to finish!
            ${upperBodyExercisesStringBeg} ${upperBodyExercisesStringInt} ${upperBodyExercisesStringAdv}
            
            ========== WELL DONE! ==========`
        );
    }

    legWorkout() {
        let createdLegWorkoutBeg = [];
        let createdLegWorkoutInt = [];
        let createdLegWorkoutAdv = [];

        // Math.random() * (max - min) + min;
        // Max = array.length - 1
        // Min = 0
        // console.log(upperBodyList);
        for (let i = 0; i < 10; i++) {
            if (legListBeg.length > 1 && this.level == "Beginner") {
                let randomExercisesBeg = Math.floor(
                    Math.random() * (legListBeg.length - 1)
                );
                createdLegWorkoutBeg.push(legListBeg[randomExercisesBeg]);
            }
            if (legListInt.length > 1 && this.level == "Intermediate") {
                let randomExercisesInt = Math.floor(
                    Math.random() * (legListInt.length - 1)
                );
                createdLegWorkoutInt.push(legListInt[randomExercisesInt]);
            }
            if (legListAdv.length > 1 && this.level == "Advanced") {
                let randomExercisesAdv = Math.floor(
                    Math.random() * (legListAdv.length - 1)
                );
                createdLegWorkoutAdv.push(legListAdv[randomExercisesAdv]);
            }
            // else {
            //     createdUpperBodyWorkout.push(upperBodyList[i]);
            // }
        }
        console.table(createdLegWorkoutBeg);
        console.table(createdLegWorkoutInt);
        console.table(createdLegWorkoutAdv);

        // Make a new string to hold the names of all Upper Body Beginner || Intermediate || Advanced exercises from the list
        let legExercisesStringBeg = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdLegWorkoutBeg) {
            legExercisesStringBeg += `
            - ${exercise.exerciseName}`;
        }

        let legExercisesStringInt = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdLegWorkoutInt) {
            legExercisesStringInt += `
            - ${exercise.exerciseName}`;
        }

        let legExercisesStringAdv = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdLegWorkoutAdv) {
            legExercisesStringAdv += `
            - ${exercise.exerciseName}`;
        }

        // Log the list of exercises, making sure to remove the final space and comma
        console.log(
            `           
            Hi ${this.userName}! Welcome to your ${this.type} ${this.level} workout!
            
            Complete each exercise listed below to finish one circuit. 
            Rest as little as necessary, then start the next circuit. 
            Do two total circuits to finish!
            ${legExercisesStringBeg} ${legExercisesStringInt} ${legExercisesStringAdv}
            
            ========== WELL DONE! ==========`
        );
    }

    upperBodyCardioWorkout() {
        // CREATE A WORKOUT THAT INCLUDES 10 RANDOM EXERCISES FROM THE upperBodyList (line 1260) AND IS LEVEL "Beginner" WHEN THE NEW CREATED INSTANCE HAS THE LEVEL "Beginner"
        // OR
        // CREATE A WORKOUT THAT INCLUDES 10 RANDOM EXERCISES FROM THE upperBodyList (line 1260) AND IS LEVEL "Intermediate" WHEN THE NEW CREATED INSTANCE HAS THE LEVEL "Intermediate"
        // OR
        // CREATE A WORKOUT THAT INCLUDES 10 RANDOM EXERCISES FROM THE upperBodyList (line 1260) AND IS LEVEL "Advanced" WHEN THE NEW CREATED INSTANCE HAS THE LEVEL "Advanced"
        let createdUpperBodyCardioWorkoutBeg = [];
        let createdUpperBodyCardioWorkoutInt = [];
        let createdUpperBodyCardioWorkoutAdv = [];

        // Math.random() * (max - min) + min;
        // Max = array.length - 1
        // Min = 0
        // console.log(upperBodyCardioList);
        for (let i = 0; i < 10; i++) {
            if (upperBodyCardioListBeg.length > 1 && this.level == "Beginner") {
                let randomExercisesBeg = Math.floor(
                    Math.random() * (upperBodyCardioListBeg.length - 1)
                );
                createdUpperBodyCardioWorkoutBeg.push(
                    upperBodyCardioListBeg[randomExercisesBeg]
                );
            }
            if (
                upperBodyCardioListInt.length > 1 &&
                this.level == "Intermediate"
            ) {
                let randomExercisesInt = Math.floor(
                    Math.random() * (upperBodyCardioListInt.length - 1)
                );
                createdUpperBodyCardioWorkoutInt.push(
                    upperBodyCardioListInt[randomExercisesInt]
                );
            }
            if (upperBodyCardioListAdv.length > 1 && this.level == "Advanced") {
                let randomExercisesAdv = Math.floor(
                    Math.random() * (upperBodyCardioListAdv.length - 1)
                );
                createdUpperBodyCardioWorkoutAdv.push(
                    upperBodyCardioListAdv[randomExercisesAdv]
                );
            }
            // else {
            //     createdUpperBodyWorkout.push(upperBodyList[i]);
            // }
        }
        console.table(createdUpperBodyCardioWorkoutBeg);
        console.table(createdUpperBodyCardioWorkoutInt);
        console.table(createdUpperBodyCardioWorkoutAdv);

        // Make a new string to hold the names of all Upper Body Beginner || Intermediate || Advanced exercises from the list
        let upperBodyCardioExercisesStringBeg = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdUpperBodyCardioWorkoutBeg) {
            upperBodyCardioExercisesStringBeg += `
            - ${exercise.exerciseName}`;
        }
        let upperBodyCardioExercisesStringInt = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdUpperBodyCardioWorkoutInt) {
            upperBodyCardioExercisesStringInt += `
            - ${exercise.exerciseName}`;
        }

        let upperBodyCardioExercisesStringAdv = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdUpperBodyCardioWorkoutAdv) {
            upperBodyCardioExercisesStringAdv += `
            - ${exercise.exerciseName}`;
        }

        // Log the list of exercises, making sure to remove the final space and comma
        console.log(
            `           
            Hi ${this.userName}! Welcome to your ${this.type} ${this.level} workout!
            
            Complete each exercise listed below to finish one circuit. 
            Rest as little as necessary, then start the next circuit. 
            Do two total circuits to finish!
            ${upperBodyCardioExercisesStringBeg} ${upperBodyCardioExercisesStringInt} ${upperBodyCardioExercisesStringAdv}
            
            ========== WELL DONE! ==========`
        );
    }

    // WORK IN PROGRESS
    lowerBodyWorkout() {
        let createdLowerBodyWorkoutBeg = [];
        let createdLowerBodyWorkoutInt = [];
        let createdLowerBodyWorkoutAdv = [];

        // Math.random() * (max - min) + min;
        // Max = array.length - 1
        // Min = 0
        // console.log(lowerBodyList);
        for (let i = 0; i < 10; i++) {
            if (lowerBodyListBeg.length > 1 && this.level == "Beginner") {
                let randomExercisesBeg = Math.floor(
                    Math.random() * (lowerBodyListBeg.length - 1)
                );
                createdLowerBodyWorkoutBeg.push(
                    lowerBodyListBeg[randomExercisesBeg]
                );
            }
            if (lowerBodyListInt.length > 1 && this.level == "Intermediate") {
                let randomExercisesInt = Math.floor(
                    Math.random() * (lowerBodyListInt.length - 1)
                );
                createdLowerBodyWorkoutInt.push(
                    lowerBodyListInt[randomExercisesInt]
                );
            }
            if (lowerBodyListAdv.length > 1 && this.level == "Advanced") {
                let randomExercisesAdv = Math.floor(
                    Math.random() * (lowerBodyListAdv.length - 1)
                );
                createdLowerBodyWorkoutAdv.push(
                    lowerBodyListAdv[randomExercisesAdv]
                );
            }
            // else {
            //     createdLowerBodyWorkout.push(LowerBodyList[i]);
            // }
        }
        console.table(createdLowerBodyWorkoutBeg);
        console.table(createdLowerBodyWorkoutInt);
        console.table(createdLowerBodyWorkoutAdv);

        // Make a new string to hold the names of all Lower Body Beginner || Intermediate || Advanced exercises from the list
        let lowerBodyExercisesStringBeg = "";

        // Loop through the array of exercises objects and each time add the name to "lowerBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdLowerBodyWorkoutBeg) {
            lowerBodyExercisesStringBeg += `
            - ${exercise.exerciseName}`;
        }
        let lowerBodyExercisesStringInt = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdLowerBodyWorkoutInt) {
            lowerBodyExercisesStringInt += `
            - ${exercise.exerciseName}`;
        }

        let lowerBodyExercisesStringAdv = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdLowerBodyWorkoutAdv) {
            lowerBodyExercisesStringAdv += `
            - ${exercise.exerciseName}`;
        }

        // Log the list of exercises, making sure to remove the final space and comma
        console.log(
            `           
            Hi ${this.userName}! Welcome to your ${this.type} ${this.level} workout!
            
            Complete each exercise listed below to finish one circuit. 
            Rest as little as necessary, then start the next circuit. 
            Do two total circuits to finish!
            ${lowerBodyExercisesStringBeg} ${lowerBodyExercisesStringInt} ${lowerBodyExercisesStringAdv}
            
            ========== WELL DONE! ==========`
        );
    }

    surpriseMeWorkout() {
        let createdSurpriseMeWorkoutBeg = [];
        let createdSurpriseMeWorkoutInt = [];
        let createdSurpriseMeWorkoutAdv = [];

        // Math.random() * (max - min) + min;
        // Max = array.length - 1
        // Min = 0
        // console.log(lowerBodyList);
        for (let i = 0; i < 10; i++) {
            if (surpriseMeListBeg.length > 1 && this.level == "Beginner") {
                let randomExercisesBeg = Math.floor(
                    Math.random() * (surpriseMeListBeg.length - 1)
                );
                createdSurpriseMeWorkoutBeg.push(
                    surpriseMeListBeg[randomExercisesBeg]
                );
            }
            if (surpriseMeListInt.length > 1 && this.level == "Intermediate") {
                let randomExercisesInt = Math.floor(
                    Math.random() * (surpriseMeListInt.length - 1)
                );
                createdSurpriseMeWorkoutInt.push(
                    surpriseMeListInt[randomExercisesInt]
                );
            }
            if (surpriseMeListAdv.length > 1 && this.level == "Advanced") {
                let randomExercisesAdv = Math.floor(
                    Math.random() * (surpriseMeListAdv.length - 1)
                );
                createdSurpriseMeWorkoutAdv.push(
                    surpriseMeListAdv[randomExercisesAdv]
                );
            }
            // else {
            //     createdLowerBodyWorkout.push(LowerBodyList[i]);
            // }
        }
        console.table(createdSurpriseMeWorkoutBeg);
        console.table(createdSurpriseMeWorkoutInt);
        console.table(createdSurpriseMeWorkoutAdv);

        // Make a new string to hold the names of all Lower Body Beginner || Intermediate || Advanced exercises from the list
        let surpriseMeExercisesStringBeg = "";

        // Loop through the array of exercises objects and each time add the name to "lowerBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdSurpriseMeWorkoutBeg) {
            surpriseMeExercisesStringBeg += `
            - ${exercise.exerciseName}`;
        }
        let surpriseMeExercisesStringInt = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdSurpriseMeWorkoutInt) {
            surpriseMeExercisesStringInt += `
            - ${exercise.exerciseName}`;
        }

        let surpriseMeExercisesStringAdv = "";

        // Loop through the array of exercises objects and each time add the name to "upperBodyExercisesString" to build up a list of exercises names
        for (let exercise of createdSurpriseMeWorkoutAdv) {
            surpriseMeExercisesStringAdv += `
            - ${exercise.exerciseName}`;
        }

        // Log the list of exercises, making sure to remove the final space and comma
        console.log(
            `           
            Hi ${this.userName}! Welcome to your ${this.type} ${this.level} workout!
            
            Complete each exercise listed below to finish one circuit. 
            Rest as little as necessary, then start the next circuit. 
            Do two total circuits to finish!
            ${surpriseMeExercisesStringBeg} ${surpriseMeExercisesStringInt} ${surpriseMeExercisesStringAdv}
            
            ========== WELL DONE! ==========`
        );
    }
}
// ================= ALL UPPER BODY EXERCISES =================
//#region
// [] Superman Beginner
let supermanBeg = new CreateWorkout(
    "Superman",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// [] Superman Intermediate
let supermanInt = new CreateWorkout(
    "Superman",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// [] Superman Advanced
let supermanAdv = new CreateWorkout(
    "Superman",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// [] Push Up Beginner
let pushUpsBeg = new CreateWorkout(
    "PushUp",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// [] Push Up Intermediate
let pushUpsInt = new CreateWorkout(
    "PushUp",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Push Up Advanced
let pushUpsAdv = new CreateWorkout(
    "PushUp",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let TürziehenTischziehenBeg = new CreateWorkout(
    "Türziehen/Tischziehen",
    "Upper Body",
    "Beginner",
    "yes",
    10
);
// []  Intermediate
let türziehenTischziehenInt = new CreateWorkout(
    "Türziehen/Tischziehen",
    "Upper Body",
    "Intermediate",
    "yes",
    10
);
// []  Advanced
let türziehenTischziehenAdv = new CreateWorkout(
    "Türziehen/Tischziehen",
    "Upper Body",
    "Advanced",
    "yes",
    10
);
// []  Beginner
let dipsBeg = new CreateWorkout("Dips", "Upper Body", "Beginner", "yes", 10);
// []  Intermediate
let dipsInt = new CreateWorkout(
    "Dips",
    "Upper Body",
    "Intermediate",
    "yes",
    10
);
// []  Advanced
let dipsAdv = new CreateWorkout(
    "Dips",
    "Upper Body",
    "git Advanced",
    "yes",
    10
);
// []  Beginner
let narrowPushUpsBeg = new CreateWorkout(
    "Narrow Push Up",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let narrowPushUpsInt = new CreateWorkout(
    "Narrow Push Up",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let narrowPushUpsAdv = new CreateWorkout(
    "Narrow Push Up",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let plankBeg = new CreateWorkout("Plank", "Upper Body", "Beginner", "no", 10);
// []  Intermediate
let plankInt = new CreateWorkout(
    "Plank",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let plankAdv = new CreateWorkout("Plank", "Upper Body", "Advanced", "no", 10);
// []  Beginner
let supermanMitRudernBeg = new CreateWorkout(
    "Superman mit Rudern",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let supermanMitRudernInt = new CreateWorkout(
    "Superman mit Rudern",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let supermanMitRudernIntAdv = new CreateWorkout(
    "Superman mit Rudern",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let walkingPushUpsBeg = new CreateWorkout(
    "Walking Push Ups",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let walkingPushUpsInt = new CreateWorkout(
    "Walking Push Ups",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let walkingPushUpsAdv = new CreateWorkout(
    "Walking Push Ups",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let vorgebdeugtesSeithebenBeg = new CreateWorkout(
    "Vorgebdeugtes Seitheben",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let vorgebdeugtesSeithebenInt = new CreateWorkout(
    "Vorgebdeugtes Seitheben",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let vorgebdeugtesSeithebenAdv = new CreateWorkout(
    "Vorgebdeugtes Seitheben",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let dipsAufDemBodenBeg = new CreateWorkout(
    "Dips auf dem Boden",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let dipsAufDemBodenInt = new CreateWorkout(
    "Dips auf dem Boden",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let dipsAufDemBodenAdv = new CreateWorkout(
    "Dips auf dem Boden",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let diamondPushUpsBeg = new CreateWorkout(
    "diamondPushUps",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let diamondPushUpsInt = new CreateWorkout(
    "diamondPushUps",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let diamondPushUpsAdv = new CreateWorkout(
    "diamondPushUps",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let trizepsKicksBeg = new CreateWorkout(
    "trizepsKicks",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let trizepsKicksInt = new CreateWorkout(
    "trizepsKicks",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let trizepsKicksAdv = new CreateWorkout(
    "trizepsKicks",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let vorgebeugtesSeithebenBeg = new CreateWorkout(
    "vorgebeugtes Seitheben",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let vorgebeugtesSeithebenInt = new CreateWorkout(
    "vorgebeugtes Seitheben",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let vorgebeugtesSeithebenAdv = new CreateWorkout(
    "vorgebeugtes Seitheben",
    "Upper Body",
    "Advanced",
    "no",
    10
);

// []  Beginner
let pushUpsStandBeg = new CreateWorkout(
    "pushUpsStand",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let pushUpsStandInt = new CreateWorkout(
    "pushUpsStand",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let pushUpsStandAdv = new CreateWorkout(
    "pushUpsStand",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let bearCrawlBeg = new CreateWorkout(
    "bearCrawl",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let bearCrawlInt = new CreateWorkout(
    "bearCrawl",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let bearCrawlAdv = new CreateWorkout(
    "bearCrawl",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let supermanReverseButterflyBeg = new CreateWorkout(
    "supermanReverseButterfly",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let supermanReverseButterflyInt = new CreateWorkout(
    "supermanReverseButterfly",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let supermanReverseButterflyAdv = new CreateWorkout(
    "supermanReverseButterfly",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let crunchesUBBeg = new CreateWorkout(
    "Crunches",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let crunchesUBInt = new CreateWorkout(
    "Crunches",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let crunchesUBAdv = new CreateWorkout(
    "Crunches",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let sidePlankBeg = new CreateWorkout(
    "side Plank",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let sidePlankInt = new CreateWorkout(
    "side Plank",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let sidePlankAdv = new CreateWorkout(
    "side Plank",
    "Upper Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let plankJacksBeg = new CreateWorkout(
    "plankJacks",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let plankJacksInt = new CreateWorkout(
    "plankJacks",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let plankJacksAdv = new CreateWorkout(
    "plankJacks",
    "Upper Body",
    "Advanced",
    "no",
    10
);
//#endregion

// ================= ALL LEG KILLER EXERCISES =================
//#region
// []  Beginner
let sumoSquatBeg = new CreateWorkout(
    "Sumo Squat",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let sumoSquatInt = new CreateWorkout(
    "Sumo Squat",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let sumoSquatAdv = new CreateWorkout(
    "Sumo Squat",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
// []  Beginner
let hipThrustsBeg = new CreateWorkout(
    "Hip Thrusts",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let hipThrustsInt = new CreateWorkout(
    "Hip Thrusts",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let hipThrustsAdv = new CreateWorkout(
    "Hip Thrusts",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
let WideSquatBeg = new CreateWorkout(
    "Wide Squat",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let wideSquatInt = new CreateWorkout(
    "Wide Squat",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let wideSquatAdv = new CreateWorkout(
    "Wide Squat",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
let sideLegLiftBeg = new CreateWorkout(
    "Side Leg Lift",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let sideLegLiftInt = new CreateWorkout(
    "Side Leg Lift",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let sideLegLiftAdv = new CreateWorkout(
    "Side Leg Lift",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
let kickbacksBeg = new CreateWorkout(
    "Kickbacks",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let kickbacksInt = new CreateWorkout(
    "Kickbacks",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let kickbacksAdv = new CreateWorkout(
    "Kickbacks",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
let lungesBeg = new CreateWorkout("Lunges", "Leg Killer", "Beginner", "no", 10);
// []  Intermediate
let lungesInt = new CreateWorkout(
    "Lunges",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let lungesAdv = new CreateWorkout("Lunges", "Leg Killer", "Advanced", "no", 10);
// []  Beginner
let kniebeugenKnieanhebenBeg = new CreateWorkout(
    "kniebeugenKnieanheben",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let kniebeugenKnieanhebenInt = new CreateWorkout(
    "",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let kniebeugenKnieanhebenAdv = new CreateWorkout(
    "kniebeugenKnieanheben",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
// []  Beginner
let overHeadSquatsBeg = new CreateWorkout(
    "overHeadSquats",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let overHeadSquatsInt = new CreateWorkout(
    "overHeadSquats",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let overHeadSquatsAdv = new CreateWorkout(
    "overHeadSquats",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
// []  Beginner
let seitlichesBeinkreisenBeg = new CreateWorkout(
    "seitlichesBeinkreisen",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let seitlichesBeinkreisenInt = new CreateWorkout(
    "seitlichesBeinkreisen",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let seitlichesBeinkreisenAdv = new CreateWorkout(
    "seitlichesBeinkreisen",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
// []  Beginner
let walkingLungesBeg = new CreateWorkout(
    "walkingLunges",
    "Leg Killer",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let walkingLungesInt = new CreateWorkout(
    "walkingLunges",
    "Leg Killer",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let walkingLungesAdv = new CreateWorkout(
    "walkingLunges",
    "Leg Killer",
    "Advanced",
    "no",
    10
);
// []  Beginner
let beinpendelBeg = new CreateWorkout(
    "beinpendel",
    "Upper Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let beinpendelInt = new CreateWorkout(
    "beinpendel",
    "Upper Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let beinpendelAdv = new CreateWorkout(
    "beinpendel",
    "Upper Body",
    "Advanced",
    "no",
    10
);
//#endregion

// ================= ALL UPPER BODY & CARDIO EXERCISES =================
//#region
// []  Beginner
let pushUpsStandUPCBeg = new CreateWorkout(
    "Push Ups Standing Position",
    "Upper Body & Cardio",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let pushUpsStandUPCInt = new CreateWorkout(
    "Push Ups Standing Position",
    "Upper Body & Cardio",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let pushUpsStandUPCAdv = new CreateWorkout(
    "Push Ups Standing Position",
    "Upper Body & Cardio",
    "Advanced",
    "no",
    10
);
// []  Beginner
let plankHoldBeg = new CreateWorkout(
    "Plank Hold",
    "Upper Body & Cardio",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let plankHoldInt = new CreateWorkout(
    "Plank Hold",
    "Upper Body & Cardio",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let plankHoldAdv = new CreateWorkout(
    "Plank Hold",
    "Upper Body & Cardio",
    "Advanced",
    "no",
    10
);
// []  Beginner
let crunchesUPCBeg = new CreateWorkout(
    "CrunchesBeg",
    "Upper Body & Cardio",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let crunchesBegUPCInt = new CreateWorkout(
    "CrunchesBeg",
    "Upper Body & Cardio",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let CrunchesBegUPCAdv = new CreateWorkout(
    "CrunchesBeg",
    "Upper Body & Cardio",
    "Advanced",
    "no",
    10
);
// []  Beginner
let supermanPullBeg = new CreateWorkout(
    "Superman Pull",
    "Upper Body & Cardio",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let supermanPullInt = new CreateWorkout(
    "Superman Pull",
    "Upper Body & Cardio",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let supermanPullAdv = new CreateWorkout(
    "Superman Pull",
    "Upper Body & Cardio",
    "Advanced",
    "no",
    10
);
// []  Beginner
let sidePlankUPCBeg = new CreateWorkout(
    "Side Plank",
    "Upper Body & Cardio",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let sidePlankUPCInt = new CreateWorkout(
    "Side Plank",
    "Upper Body & Cardio",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let sidePlankUPCAdv = new CreateWorkout(
    "Side Plank",
    "Upper Body & Cardio",
    "Advanced",
    "no",
    10
);
// []  Beginner
let burpeesBeg = new CreateWorkout(
    "Burpees",
    "Upper Body & Cardio",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let burpeesInt = new CreateWorkout(
    "Burpees",
    "Upper Body & Cardio",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let burpeesAdv = new CreateWorkout(
    "Burpees",
    "Upper Body & Cardio",
    "Advanced",
    "no",
    10
);
//#endregion

// ================= ALL LOWER BODY EXERCISES =================
//#region
// []  Beginner
let squatsBeg = new CreateWorkout("Squats", "Lower Body", "Beginner", "no", 10);
// []  Intermediate
let squatsInt = new CreateWorkout(
    "Squats",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let squatsAdv = new CreateWorkout("Squats", "Lower Body", "Advanced", "no", 10);
// []  Beginner
let jumpingLungesBeg = new CreateWorkout(
    "Jumping Lunges",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let jumpingLungesInt = new CreateWorkout(
    "Jumping Lunges",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let jumpingLungesAdv = new CreateWorkout(
    "Jumping Lunges",
    "Lower Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let huftstossAufRuckenBeg = new CreateWorkout(
    "HuftstossAufRucken",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let huftstossAufRuckenInt = new CreateWorkout(
    "HuftstossAufRucken",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let huftstossAufRuckenAdv = new CreateWorkout(
    "HuftstossAufRucken",
    "Lower Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let einbeinigesKreuzhebenBeg = new CreateWorkout(
    "einbeinigesKreuzheben",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let einbeinigesKreuzhebenInt = new CreateWorkout(
    "einbeinigesKreuzheben",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let einbeinigesKreuzhebenAdv = new CreateWorkout(
    "einbeinigesKreuzheben",
    "Lower Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let abduktionBeg = new CreateWorkout(
    "Abduktion im Vierfüßlerstand",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let abduktionInt = new CreateWorkout(
    "Abduktion im Vierfüßlerstand",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let abduktionAdv = new CreateWorkout(
    "Abduktion im Vierfüßlerstand",
    "Lower Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let squatKickBeg = new CreateWorkout(
    "squatKick",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let squatKickInt = new CreateWorkout(
    "squatKick",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let squatKickAdv = new CreateWorkout(
    "squatKick",
    "Lower Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let crunchesBeinLBBeg = new CreateWorkout(
    "Crunches mit angehobenen Beinen",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let crunchesBeinLBInt = new CreateWorkout(
    "Crunches mit angehobenen Beinen",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let crunchesBeinLBAdv = new CreateWorkout(
    "Crunches mit angehobenen Beinen",
    "Lower Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let squatHoldBeg = new CreateWorkout(
    "Squat Hold",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let squatHoldInt = new CreateWorkout(
    "Squat Hold",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let squatHoldAdv = new CreateWorkout(
    "Squat Hold",
    "Lower Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let getUpsBeg = new CreateWorkout(
    "Get up’s",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let getUpsInt = new CreateWorkout(
    "Get up’s",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let getUpsAdv = new CreateWorkout(
    "Get up’s",
    "Lower Body",
    "Advanced",
    "no",
    10
);
// []  Beginner
let legKicksBeg = new CreateWorkout(
    "Leg Kicks",
    "Lower Body",
    "Beginner",
    "no",
    10
);
// []  Intermediate
let legKicksInt = new CreateWorkout(
    "Leg Kicks",
    "Lower Body",
    "Intermediate",
    "no",
    10
);
// []  Advanced
let legKicksAdv = new CreateWorkout(
    "Leg Kicks",
    "Lower Body",
    "Advanced",
    "no",
    10
);
//#endregion
// ================= ALL SURPRISE ME EXERCISES =================
// goes through all exercise and choose a random mix of them

// ================= ARRAY OF UPPER BODY EXERCISES =================
//#region
let upperBodyListBeg = [
    supermanBeg,
    pushUpsBeg,
    TürziehenTischziehenBeg,
    dipsBeg,
    narrowPushUpsBeg,
    plankBeg,
    supermanMitRudernBeg,
    walkingPushUpsBeg,
    vorgebdeugtesSeithebenBeg,
    dipsAufDemBodenBeg,
    diamondPushUpsBeg,
    trizepsKicksBeg,
    pushUpsStandBeg,
    bearCrawlBeg,
    supermanReverseButterflyBeg,
    crunchesUBBeg,
    sidePlankBeg,
    plankJacksBeg,
];
let upperBodyListInt = [
    supermanInt,
    pushUpsInt,
    türziehenTischziehenInt,
    dipsInt,
    narrowPushUpsInt,
    plankInt,
    supermanMitRudernInt,
    walkingPushUpsInt,
    vorgebdeugtesSeithebenInt,
    dipsAufDemBodenInt,
    diamondPushUpsInt,
    trizepsKicksInt,
    pushUpsStandInt,
    bearCrawlInt,
    supermanReverseButterflyInt,
    crunchesUBInt,
    sidePlankInt,
    plankJacksInt,
];
let upperBodyListAdv = [
    supermanAdv,
    pushUpsAdv,
    türziehenTischziehenAdv,
    dipsAdv,
    narrowPushUpsAdv,
    plankAdv,
    supermanMitRudernIntAdv,
    walkingPushUpsAdv,
    vorgebdeugtesSeithebenAdv,
    dipsAufDemBodenAdv,
    diamondPushUpsAdv,
    trizepsKicksAdv,
    pushUpsStandAdv,
    bearCrawlAdv,
    supermanReverseButterflyAdv,
    crunchesUBAdv,
    sidePlankAdv,
    plankJacksAdv,
];
//#endregion

// ================= ARRAY OF LEG KILLER EXERCISES =================
//#region
let legListBeg = [
    sumoSquatBeg,
    hipThrustsBeg,
    WideSquatBeg,
    sideLegLiftBeg,
    kickbacksBeg,
    lungesBeg,
    kniebeugenKnieanhebenBeg,
    overHeadSquatsBeg,
    seitlichesBeinkreisenBeg,
    walkingLungesBeg,
    beinpendelBeg,
];

let legListInt = [
    sumoSquatInt,
    hipThrustsInt,
    wideSquatInt,
    sideLegLiftInt,
    kickbacksInt,
    lungesInt,
    kniebeugenKnieanhebenInt,
    overHeadSquatsInt,
    seitlichesBeinkreisenInt,
    walkingLungesInt,
    beinpendelInt,
];
let legListAdv = [
    sumoSquatAdv,
    hipThrustsAdv,
    wideSquatAdv,
    sideLegLiftAdv,
    kickbacksAdv,
    lungesAdv,
    kniebeugenKnieanhebenAdv,
    overHeadSquatsAdv,
    seitlichesBeinkreisenAdv,
    walkingLungesAdv,
    beinpendelAdv,
];
//#endregion

// ================= ARRAY OF UPPER BODY CADIO EXERCISES =================
//#region
let upperBodyCardioListBeg = [
    pushUpsStandUPCBeg,
    plankHoldBeg,
    supermanPullBeg,
    sidePlankUPCBeg,
    burpeesBeg,
];

let upperBodyCardioListInt = [
    pushUpsStandUPCInt,
    plankHoldInt,
    supermanPullInt,
    sidePlankUPCInt,
    burpeesInt,
];

let upperBodyCardioListAdv = [
    pushUpsStandUPCBeg,
    plankHoldBeg,
    supermanPullBeg,
    sidePlankUPCBeg,
    burpeesBeg,
];
//#endregion

// ================= ARRAY OF LOWER BODY EXERCISES =================
//#region
let lowerBodyListBeg = [
    squatsBeg,
    jumpingLungesBeg,
    huftstossAufRuckenBeg,
    einbeinigesKreuzhebenBeg,
    abduktionBeg,
    squatKickBeg,
    crunchesBeinLBBeg,
    squatHoldBeg,
    getUpsBeg,
    legKicksBeg,
];

let lowerBodyListInt = [
    squatsInt,
    jumpingLungesInt,
    huftstossAufRuckenInt,
    einbeinigesKreuzhebenInt,
    abduktionInt,
    squatKickInt,
    crunchesBeinLBInt,
    squatHoldInt,
    getUpsInt,
    legKicksInt,
];

let lowerBodyListAdv = [
    squatsAdv,
    jumpingLungesAdv,
    huftstossAufRuckenAdv,
    einbeinigesKreuzhebenAdv,
    abduktionAdv,
    squatKickAdv,
    crunchesBeinLBAdv,
    squatHoldAdv,
    getUpsAdv,
    legKicksAdv,
];
//#endregion

// ================= ARRAY OF SURPRISE ME EXERCISES =================
//#region
let surpriseMeListBeg = [
    supermanBeg,
    pushUpsBeg,
    TürziehenTischziehenBeg,
    dipsBeg,
    narrowPushUpsBeg,
    plankBeg,
    supermanMitRudernBeg,
    walkingPushUpsBeg,
    dipsAufDemBodenBeg,
    diamondPushUpsBeg,
    trizepsKicksBeg,
    vorgebdeugtesSeithebenBeg,
    pushUpsStandBeg,
    bearCrawlBeg,
    supermanReverseButterflyBeg,
    crunchesUBBeg,
    sidePlankBeg,
    plankJacksBeg,
    sumoSquatBeg,
    hipThrustsBeg,
    WideSquatBeg,
    sideLegLiftBeg,
    kickbacksBeg,
    lungesBeg,
    kniebeugenKnieanhebenBeg,
    overHeadSquatsBeg,
    seitlichesBeinkreisenBeg,
    walkingLungesBeg,
    beinpendelBeg,
    plankHoldBeg,
    supermanPullBeg,
    burpeesBeg,
    squatsBeg,
    jumpingLungesBeg,
    huftstossAufRuckenBeg,
    einbeinigesKreuzhebenBeg,
    abduktionBeg,
    squatKickBeg,
    squatHoldBeg,
    getUpsBeg,
    legKicksBeg,
];
let surpriseMeListInt = [
    supermanInt,
    pushUpsInt,
    türziehenTischziehenInt,
    dipsInt,
    narrowPushUpsInt,
    plankInt,
    supermanMitRudernInt,
    walkingPushUpsInt,
    dipsAufDemBodenInt,
    diamondPushUpsInt,
    trizepsKicksInt,
    vorgebdeugtesSeithebenInt,
    pushUpsStandInt,
    bearCrawlInt,
    supermanReverseButterflyInt,
    crunchesUBInt,
    sidePlankInt,
    plankJacksInt,
    sumoSquatInt,
    hipThrustsInt,
    wideSquatInt,
    sideLegLiftInt,
    kickbacksInt,
    lungesInt,
    kniebeugenKnieanhebenInt,
    overHeadSquatsInt,
    seitlichesBeinkreisenInt,
    walkingLungesInt,
    beinpendelInt,
    plankHoldInt,
    supermanPullInt,
    burpeesInt,
    squatsInt,
    jumpingLungesInt,
    huftstossAufRuckenInt,
    einbeinigesKreuzhebenInt,
    abduktionInt,
    squatKickInt,
    squatHoldInt,
    getUpsInt,
    legKicksInt,
];
let surpriseMeListAdv = [
    supermanAdv,
    pushUpsAdv,
    türziehenTischziehenAdv,
    dipsAdv,
    narrowPushUpsAdv,
    plankAdv,
    supermanMitRudernIntAdv,
    walkingPushUpsAdv,
    dipsAufDemBodenAdv,
    diamondPushUpsAdv,
    trizepsKicksAdv,
    vorgebeugtesSeithebenAdv,
    pushUpsStandAdv,
    bearCrawlAdv,
    supermanReverseButterflyAdv,
    crunchesUBAdv,
    sidePlankAdv,
    plankJacksAdv,
    sumoSquatAdv,
    hipThrustsAdv,
    wideSquatAdv,
    sideLegLiftAdv,
    kickbacksAdv,
    lungesAdv,
    kniebeugenKnieanhebenAdv,
    overHeadSquatsAdv,
    seitlichesBeinkreisenAdv,
    walkingLungesAdv,
    beinpendelAdv,
    plankHoldAdv,
    supermanAdv,
    burpeesAdv,
    squatsAdv,
    jumpingLungesAdv,
    huftstossAufRuckenAdv,
    einbeinigesKreuzhebenAdv,
    abduktionAdv,
    squatKickAdv,
    squatHoldAdv,
    getUpsAdv,
    legKicksAdv,
];
//#endregion

// const getRandomWorkoutKey = (length) => {
//     let randomKey = Math.floor(Math.random() * (length - 1));
//     return randomKey;
// };
// let randomUpperBodyExercise =
//     upperBodyList[getRandomWorkoutKey(upperBodyList.length)];

// add loop to create 10 random exercises

// exerciseName, type, level, equipment, length, userName
// WORKS

let user1 = new CreateWorkout(
    "",
    "Upper Body",
    "Beginner",
    "yes",
    "30", // TIME DOESN'T WORK
    "Jim"
);
console.log(user1);
user1.upperBodyWorkout();

let user2 = new CreateWorkout(
    "",
    "Leg Killer",
    "Intermediate",
    "yes",
    "10",
    "John"
);
console.log(user2);
user2.legWorkout();

// !! DOESN'T WORK
// let user3 = new CreateWorkout(
//     "",
//     "Upper Body Cardio",
//     "Advanced",
//     "yes",
//     "10",
//     "Jack"
// );
// console.log(user3);
// user3.upperBodyCardioWorkout();

let user4 = new CreateWorkout(
    "",
    "Lower Body",
    "Intermediate",
    "yes",
    "10",
    "Beverly"
);
console.log(user4);
user4.lowerBodyWorkout();

// WORK IN PROGRESS
// let user5 = new CreateWorkout(
//     "",
//     "Surprise Me",
//     "Beginner",
//     "yes",
//     "20",
//     "Everly"
// );
// console.log(user5);
// user4.surpriseMeWorkout();

// ================= TEMPLATE FOR NEW EXERCISES =================
//#region
// []  Beginner
// let Beg = new CreateWorkout("exercise", "type", "Beginner", "equipment", length);
// // []  Intermediate
// let Int = new CreateWorkout("exercise", "type", "Intermediate", "equipment", length);
// // []  Advanced
// let Adv = new CreateWorkout("exercise", "type", "Advanced", "equipment", length);
