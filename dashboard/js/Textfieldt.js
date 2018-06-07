class textinput extends HTMLElement {
    constructor() {
        super();
        this._borderposition = "5 5 5";
        this._borderScale = "7 7 7";
        this._borderWidth = "10.5";
        this._textFieldPosition = "0 0 0.02";
        this._textPosition = "-5 0 0.1";
        this._borderColor = "black";
        this._textfieldColor = "red";
        this._textContent = "";
        this._gkeyboardtarget;
        this._rotation="";
        this._className="";
        this._textvalue=""
        this._zin;


        var aframescene = document.getElementById("ascene");
        this.border = document.createElement("a-plane");
        this.textField = document.createElement("a-plane");
        this.text = document.createElement("a-text");

       this.border.setAttribute("height", "2.5");
       this.border.setAttribute("width", "10.5");
       this.border.setAttribute("position", this.getAttribute('position'));


       this.textField.setAttribute("height", "2");
       this.textField.setAttribute("width", "10");
       this.textField.setAttribute("position",this._textFieldPosition);
 


       this.text.setAttribute("value", this._textContent);
       this.text.setAttribute("id", "iskawe");
       this.text.setAttribute("scale", "7 7 7");
       this.text.setAttribute("color", "white");
       this.text.setAttribute("position",this._textPosition);



        aframescene.appendChild(this.border);
        this.border.appendChild(this.textField);
        this.textField.appendChild(this.text);
        
    }

    get position() {
        return this._borderposition;
    }
    set position(val) {
        this.setAttribute('position', val);
    }

    get textvalue() {
        return this._textvalue;
    }
    set position(val) {
        this.text.setAttribute("value",this.textValue);
    }

    get textFieldColor(){
        return this._textfieldColor;
    }

 
    set textFieldColor(val) {
        this.setAttribute('textfieldcolor', val);
    }

    get bordercolor() {
        return this._borderColor
    }

    set bordercolor(val) {
        this.setAttribute('bordercolor', val);
    }
    static get observedAttributes() {
        return ['position','borderscale','borderwidth', 'rotation','textcontent','bordercolor','textfieldcolor','gkeyboardtarget','class'];
    }
    connectedCallback() {

        
        this._gkeyboardtarget = this.getAttribute('gkeyboardtarget');
        this.text.setAttribute("value",this.getAttribute("textcontent"));
        this._textvalue=this.getAttribute("textcontent");
        console.log("keyboardtarget" +this._gkeyboardtarget);
        console.log("targetkey board=" + this.id);
        var i = this;
        console.log("this   : " + i);
        this.textField.addEventListener("click", function () {

         
            console.log("this  outside function : " + i.id);
            console.log("this  outside function : " + i._gkeyboardtarget);
            document.getElementById(i._gkeyboardtarget).setAttribute("outputtarget", i.id);
            
        });
    }
    attributeChangedCallback(name, oldVal, newVal) {
        
        switch (name) {
            
            case 'bordercolor':
                console.log("nameis :" + name);
                console.log("newval is :" + newVal);
                if (newVal == "") {
                    console.log("name twoo is :" + name);
                    //this.setAttribute("bordercolor", this._borderColor);
                    this.border.setAttribute('color', this._borderColor);
                }

                else {
                    this._borderColor = newVal;
                    this.border.setAttribute('color', this._borderColor);
                }
                break;
            case 'textfieldcolor':

                if (newVal == "") {
                    console.log("color empty textfield :" + newVal);
                    //this.setAttribute('textfieldcolor', this._textfieldColor);
                    this.textField.setAttribute('color', this._textfieldColor);
                }
                else {
                    this._textfieldColor = newVal;
                    console.log("color textfield = " + this.textFieldColor)
                    this.textField.setAttribute('color', this._textfieldColor);
                }
                break;
            case 'textcontent':
         
            if (newVal == "") {
               
                this._textvalue=newVal;
          
                this.text.setAttribute('value', this._textvalue);
            }
           
            else {
                
           
                var zin = newVal;
                if (newVal == "8") {
                    this._textvalue = this._textvalue.slice(0, -1);
                 
                 
                  
                   
                    this.text.setAttribute('value', this._textvalue);
                }
                else {
                    console.log("zin value = " + zin);
                   
                    this._textvalue = this._textvalue + zin;
                    console.log("CONTEXT* = " + this._textvalue);
                    this.text.setAttribute('value',this._textvalue);
                }
              
            }
                break;

            case 'borderscale':
                if (newVal == "") {
                    this.setAttribute("borderscale", this._borderScale);
                }
                else {
                    this.border.setAttribute("scale", newVal);
                   
                }

            case 'borderwidth':
                if (newVal == "") {
                    this.setAttribute("borderwidth", this._borderWidth);
                }
                else {
                  
                    this.border.setAttribute("width", newVal);
                    this.textField.setAttribute("width", newVal - 0.5);
                    this.text.setAttribute("position", { x: -(newVal/2), y: 0, z: 0.1 });
                }
               break;
               case 'position':
               if (newVal == "") {
                   this.setAttribute("position", "0 0 0");
               }
               else {
                 
                  
                   this.setAttribute("position", newVal);
                   this.border.setAttribute("position",newVal);
               }
              break;
              case 'rotation':
              if (newVal == "") {
                  this.setAttribute("rotation",this._rotation);
              }
              else {
                
                 
                 
                  this.border.setAttribute("rotation",newVal);
              }
             break;
             case 'class':
             if (newVal == "") {
                 
             }
             else {
               
                
                
                 this.border.className=newVal;
             }
            break;
        }
    }

   functionid(i) {
        console.log("id of is : " + i);

       }

}
customElements.define('input-text', textinput);


