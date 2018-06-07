class gkeyboard extends HTMLElement {

    constructor() {
        super();
        this._letterkey = "a"
        this.boardPlane = "";
        this._boardScale = "0 0 0";
        this.outputtarget = "default";
        this._position = "0.0.0";
        this._rotation="0 0 0"
        this._id = "qi";
        this.shiftKeyOnOf = "OF";
        this.aframescene = document.getElementById("ascene");
        var that = this;
       

            var self = this;
            this.buildKeyboard(self);
    }

    static get observedAttributes() {
        return ['position', 'outputtarget', 'letterkey','keyboardscale','rotation'];
    }

    connectedCallback() {
        this.letter.getAttribute("value");
        console.log("this id = " + this._id);
      

       
        this.circleKey.addEventListener("click", function () {

            console.log("dit is test :" + self.outputtarget);
           
            var text = document.getElementById(self.outputtarget);
            text.setAttribute("textcontent", self.letter.getAttribute("value"));
           console.log( text.getAttribute("textcontent"));
        });
    }
  
    

    attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
        case 'outputtarget':
            if (newVal == "") {
                this.outputtarget = newVal;
                this.setAttribute("outputtarget", this.outputtarget);
            }
            else {
                this.outputtarget = newVal;

            }
            break;

        case 'keyboardscale':
            if (newVal == "") {
               
                this.boardPlane.setAttribute("scale",this._boardScale);
            }
            else {
                this.boardPlane.setAttribute("scale", newVal);

            }
            break;

        case 'position':
            if (newVal == "") {

                this.boardPlane.setAttribute("Position", this._position);
            }
            else {
                this.boardPlane.setAttribute("Position", newVal);

            }
            break;
          
            case 'rotation':
            if (newVal == "") {

                this.boardPlane.setAttribute("rotation", this._position);
            }
            else {
                this.boardPlane.setAttribute("rotation", newVal);

            }
            break;
        }
         
        } 
    

    buildKeyboard(selfr) {
        this.aframescene = document.getElementById("ascene");
        this.boardPlane = document.createElement("a-plane");
        this.boardPlane.id = "boardplane";
        this.boardPlane.setAttribute("width", "15");
       this.boardPlane.setAttribute("height", "6.5");
        this.boardPlane.setAttribute("color", "green");
        this.boardPlane.setAttribute("position", "4.5 3 5.9");

        console.log("this is from keyboard");
        var keyRow1 = ["81", "87", "69", "82", "84", "89", "85", "73", "79", "80"];
        var keyRow2 = ["65", "83", "68", "70", "71", "72", "74", "75", "76"];
        var keyRow3 = ["90", "88", "67", "86", "66", "78", "77", "59", "76"];
        var keyRow4 = ["64", "50", "51", "52", "53", "54", "55", "56", "57","48"];
        var i;
        var text="";
        console.log("keyboard is : " + keyRow1[0]);
        for (i = 0; i < keyRow1.length; i++) {
            this.circleKey = document.createElement('a-circle');
            this.circleKey.setAttribute("id", "keyFirstRow" + [i]);
            this.circleKey.setAttribute("value", keyRow1[i]);
            this.circleKey.setAttribute("position", { x: -5 + i, y: 1 , z: 0.2 });
            this.circleKey.setAttribute("radius", "0.5");
            this.circleKey.setAttribute("color", "orange");
       

            
            this.letter = document.createElement('a-text');
            this.letter.setAttribute("id", "letterFirstRow" + [i]);
            this.letter.setAttribute("value", String.fromCharCode(keyRow1[i]));
            this.letter.setAttribute("scale", '2 2 2');
            this.letter.setAttribute("position", '-0.2 0 0');
            this.letter.setAttribute("color", 'black');

            this.aframescene.appendChild(this.boardPlane);
            this.boardPlane.appendChild(this.circleKey);
            this.circleKey.appendChild(this.letter);


            document.getElementById("keyFirstRow" + [i]).addEventListener("click", function () {

              

                var text = document.getElementById(selfr.outputtarget);
                console.log(" aaaa ; " + selfr.outputtarget);
                text.setAttribute("textcontent", String.fromCharCode(this.getAttribute("value") ));
                console.log(text.getAttribute("textcontent"));
            });

           
        }
        for (i = 0; i < keyRow2.length; i++) {

            this.circleKey = document.createElement('a-circle');
            this.circleKey.setAttribute("id", "keySecondRow" +[i]);
            this.circleKey.setAttribute("value", keyRow2[i]);
            this.circleKey.setAttribute("position", { x: -4.8 + i, y: 0.0, z: 0.2 });
            this.circleKey.setAttribute("radius", "0.5");
            this.circleKey.setAttribute("color", "orange");



            this.letter = document.createElement('a-text');
            this.letter.setAttribute("id", "letterSecondRow" + [i]);
            this.letter.setAttribute("value", String.fromCharCode(keyRow2[i]));
            this.letter.setAttribute("scale", '2 2 2');
            this.letter.setAttribute("position", '-0.2 0 0');
            this.letter.setAttribute("color", 'black');

            this.aframescene.appendChild(this.boardPlane);
            this.boardPlane.appendChild(this.circleKey);
            this.circleKey.appendChild(this.letter);
            document.getElementById("keySecondRow" + [i]).addEventListener("click", function () {



                var text = document.getElementById(selfr.outputtarget);
                console.log(" aaaa ; " + selfr.outputtarget);
                text.setAttribute("textcontent", String.fromCharCode(this.getAttribute("value")));
                console.log(text.getAttribute("textcontent"));
            });

        }

        for (i = 0; i < keyRow3.length; i++) {

            this.circleKey = document.createElement('a-circle');
            this.circleKey.setAttribute("id", "keyThirdRow" +[i]);
            this.circleKey.setAttribute("value", keyRow3[i]);
            this.circleKey.setAttribute("position", { x: -4.8 + i, y: -1, z: 0.2  });
            this.circleKey.setAttribute("radius", "0.5");
            this.circleKey.setAttribute("color", "orange");



            this.letter = document.createElement('a-text');
            this.letter.setAttribute("id", "letterThirdRow" +[i]);
            this.letter.setAttribute("value", String.fromCharCode(keyRow3[i]));
            this.letter.setAttribute("scale", '2 2 2');
            this.letter.setAttribute("position", '-0.2 0 0');
            this.letter.setAttribute("color", 'black');

            this.aframescene.appendChild(this.boardPlane);
            this.boardPlane.appendChild(this.circleKey);
            this.circleKey.appendChild(this.letter);
            document.getElementById("keyThirdRow" + [i]).addEventListener("click", function () {



                var text = document.getElementById(selfr.outputtarget);
         
                text.setAttribute("textcontent", String.fromCharCode(this.getAttribute("value").toUpperCase()));
            
            });

        }
        for (i = 0; i < keyRow4.length; i++) {

            this.circleKey = document.createElement('a-circle');
            this.circleKey.setAttribute("id", "keyFourthRow" + [i]);
            this.circleKey.setAttribute("value", keyRow4[i]);
            this.circleKey.setAttribute("position", { x: -4.8 + i, y: 2, z: 0.2  });
            this.circleKey.setAttribute("radius", "0.5");
            this.circleKey.setAttribute("color", "orange");



            this.letter = document.createElement('a-text');
            this.letter.setAttribute("id", "letterFourthRow" + [i]);
            this.letter.setAttribute("value", String.fromCharCode(keyRow4[i]));
            this.letter.setAttribute("scale", '2 2 2');
            this.letter.setAttribute("position", '-0.2 0 0');
            this.letter.setAttribute("color", 'black');


            this.aframescene.appendChild(this.boardPlane);
            this.boardPlane.appendChild(this.circleKey);
            this.circleKey.appendChild(this.letter);
            document.getElementById("keyFourthRow" + [i]).addEventListener("click", function () {



                var text = document.getElementById(selfr.outputtarget);
                console.log(" aaaa ; " + selfr.outputtarget);
                text.setAttribute("textcontent", String.fromCharCode(this.getAttribute("value").toUpperCase()));
                console.log(text.getAttribute("textcontent"));
              
            });

        

        }
        this.spacebar = document.createElement('a-plane');
        this.spacebar.setAttribute("width", "9");
        this.spacebar.setAttribute("height", "1");
        this.spacebar.setAttribute("position", { x: -1, y: -2.2, z: 0.2});
        this.spacebar.setAttribute("id", "letter32");
        this.spacebar.setAttribute("value", "32");
        this.spacebar.setAttribute("color", "orange");

        this.aframescene.appendChild(this.boardPlane);
        this.boardPlane.appendChild(this.spacebar);
        document.getElementById("letter32").addEventListener("click", function () {



            var text = document.getElementById(selfr.outputtarget);
            text.setAttribute("textcontent", String.fromCharCode(this.getAttribute("value")));
        
         
        });

        this.shiftButton = document.createElement('a-plane');
        this.shiftButton.setAttribute("width", "2");
        this.shiftButton.setAttribute("height", "1");
        this.shiftButton.setAttribute("position", { x: 5, y: -2.2, z: 0.2 });
        this.shiftButton.setAttribute("id", "shiftkey");
        this.shiftButton.setAttribute("value", "<-");
        this.shiftButton.setAttribute("color", "orange");

       
        this.aframescene.appendChild(this.boardPlane);
        this.boardPlane.appendChild(this.shiftButton);
        document.getElementById("shiftkey").addEventListener("click", function () {
            selfr.shift(selfr.shiftKeyOnOf);

        });


        this.backspaceButton = document.createElement('a-plane');
        this.backspaceButton.setAttribute("width", "2");
        this.backspaceButton.setAttribute("height", "1");
        this.backspaceButton.setAttribute("position", { x: 6, y: 2, z: 0.2 });
        this.backspaceButton.setAttribute("id", "backspace");
        this.backspaceButton.setAttribute("value", "8");
        this.backspaceButton.setAttribute("color", "orange");

        this.aframescene.appendChild(this.boardPlane);
        this.boardPlane.appendChild(this.backspaceButton);

        document.getElementById("backspace").addEventListener("click", function () {
           
            var text = document.getElementById(selfr.outputtarget);
            text.setAttribute("textcontent", this.getAttribute("value"));
            console.log("from bacspace" + this.getAttribute("value"));

        });
    }

    shift(shiftKey) {

        switch (shiftKey) {

            case "OF":
                this.shiftKeyOnOf="ON"
                break;

            case "ON":
                this.shiftKeyOnOf = "OF"
                break;

        }

        if (this.shiftKeyOnOf == "ON") {

            var keyShiftRow1 = ["113", "119", "101", "114", "116", "121", "117", "105", "111", "112"];
            var keyShiftRow2 = ["97", "115", "100", "102", "103", "104", "106", "107", "108"];
            var keyShiftRow3 = ["122", "120", "99", "118", "98", "110", "109", ];
           
            var i = 0;
            for (i = 0; i < keyShiftRow1.length; i++) {

                document.getElementById("keyFirstRow" + [i]).setAttribute("value", keyShiftRow1[i]);
                document.getElementById("letterFirstRow" + [i]).setAttribute("value", String.fromCharCode(keyShiftRow1[i]));
            }

            for (i = 0; i < keyShiftRow2.length; i++) {

                document.getElementById("keySecondRow" + [i]).setAttribute("value", keyShiftRow2[i]);
                document.getElementById("letterSecondRow" + [i]).setAttribute("value", String.fromCharCode(keyShiftRow2[i]));
            }
            for (i = 0; i < keyShiftRow3.length; i++) {

                document.getElementById("keyThirdRow" + [i]).setAttribute("value", keyShiftRow3[i]);
                document.getElementById("letterThirdRow" + [i]).setAttribute("value", String.fromCharCode(keyShiftRow3[i]));
            }
        }

        if (this.shiftKeyOnOf == "OF") {
            var keyRow1 = ["81", "87", "69", "82", "84", "89", "85", "73", "79", "80"];
            var keyRow2 = ["65", "83", "68", "70", "71", "72", "74", "75", "76"];
            var keyRow3 = ["90", "88", "67", "86", "66", "78", "77", "59", "76"];
            var i = 0;
            for (i = 0; i < keyRow1.length; i++) {

                document.getElementById("keyFirstRow" + [i]).setAttribute("value", keyRow1[i]);
                document.getElementById("letterFirstRow" + [i]).setAttribute("value", String.fromCharCode(keyRow1[i]));
            }

            for (i = 0; i < keyRow2.length; i++) {

                document.getElementById("keySecondRow" + [i]).setAttribute("value", keyRow2[i]);
                document.getElementById("letterSecondRow" + [i]).setAttribute("value", String.fromCharCode(keyRow2[i]));
            }
            for (i = 0; i < keyRow3.length; i++) {

                document.getElementById("keyThirdRow" + [i]).setAttribute("value", keyRow3[i]);
                document.getElementById("letterThirdRow" + [i]).setAttribute("value", String.fromCharCode(keyRow3[i]));
            }
        }
        console.log("this is from shif :" + this.shiftKeyOnOf);
    }
    
}



customElements.define('g-keyboard', gkeyboard);