jQuery(document).ready(function( $ ){
    	let converter = {
            "20# Copy Paper (Black & White only)": 0.40,
            "32# Laser (standard color paper)": 0.5,
            "32# Off-White Text": 0.5,
            "Acid Free Paper (8.5x11 Only)": -0.6,
            "100# Gloss Text": 0.526,
            "100# Silk Text": 0.526,
          	"100# Matte Text": 0.75,
          	"100# 100% Recycled Text (has texture, not recommended for heavy ink coverage)": 0.75,
          	"70# 30% Recycled Text": 0.75
        }
        
        $(".event-target").click(function() {
          // if ($(this).val() == "Perfect") {
            console.log("clicked button");
            
          	let calculator = new Calculator(1);
            let radioValue = $("input[name='input_10']:checked").val();
            let numberOfSheets = 5;
            $(calculator.display()).appendTo('body');
           
            let total = numberOfSheets / (converter[radioValue] * 100);
            $(".result").val(total);
            

          // }
        });
  
  
  
  class Button {
    constructor(value) {
      this.value = value
      this.display()
    }

    display() {
      const btn = $(`
        <div class="button" data-id="${this.value}">
            ${this.value}
        </div>
      `);

      btn.on("click", () => console.log('click'));
      return btn;
    }
  }

  class Row {
    constructor(id) {
      this.id = id

      switch(this.id) {
        case 1:
          this.firstButton = new Button(7);
          this.secondButton = new Button(8);
          this.thirdButton = new Button(9);
          this.fourthButton = new Button("/")
          break;

        case 2:
          this.firstButton = new Button(4);
          this.secondButton = new Button(5);
          this.thirdButton = new Button(6);
          this.fourthButton = new Button("*");
          break;

        case 3:
          this.firstButton = new Button(1);
          this.secondButton = new Button(2);
          this.thirdButton = new Button(3);
          this.fourthButton = new Button("-");
          break;

        case 4:
          this.firstButton = new Button(0);
          this.secondButton = new Button(".");
          this.thirdButton = new Button("=");
          this.fourthButton = new Button("+");
          break;

      }
    }

    display() {
      console.log(this.firstButton)
      return (
        `<div class="row">
          ${this.firstButton.display()}
          ${this.secondButton.display()}
          ${this.thirdButton.display()}
          ${this.fourthButton.display()}
        </div>`
      )
    }
  }

  class Calculator {
    constructor(id) {
      this.id = id
      this.firstRow = new Row(1)
      this.secondRow = new Row(2)
      this.thirdRow = new Row(3)
      this.fourthRow = new Row(4)
    }

    display() {
      return (
        `<div class="calculator">
            <input type="text" class="result" placeholder="Input Number of Sheets" readonly/>

            <div class="col">
              ${this.firstRow.display()}
              ${this.secondRow.display()}
              ${this.thirdRow.display()}
              ${this.fourthRow.display()}
            </div>
        </div>`
      )
    }
  }
});