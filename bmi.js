var ht_slider = document.getElementById("height_slider");
var ht_output = document.getElementById("height_value_cm");
var ht_outin = document.getElementById("height_value_in");
var wt_slider = document.getElementById("weight_slider");
var wt_output = document.getElementById("weight_value_kg");
var wt_outin = document.getElementById("weight_value_lb");

ht_output.innerHTML = ht_slider.value;
ht_outin.innerHTML = (ht_slider.value * 39.37).toPrecision(4);
wt_output.innerHTML = wt_slider.value;
wt_outin.innerHTML = (wt_slider.value * 2.205).toPrecision(4);
var bmi_calc = wt_slider.value / (ht_slider.value * ht_slider.value);
var bmi_output = document.getElementById("bmi");
bmi_output.innerHTML = "Your BMI is " + bmi_calc.toPrecision(4);

ht_slider.oninput = function() {
    ht_output.innerHTML = this.value;
    ht_outin.innerHTML = (this.value * 39.37).toPrecision(4);
    bmi_output.innerHTML = "Your BMI is " + (wt_slider.value / (this.value * this.value)).toPrecision(4);
}

wt_slider.oninput = function() {
    wt_output.innerHTML = this.value;
    wt_outin.innerHTML = (this.value * 2.205).toPrecision(4);
    bmi_output.innerHTML = "Your BMI is " + (this.value / (ht_slider.value * ht_slider.value)).toPrecision(4);
}
