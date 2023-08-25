
var localization = {
    en: {
        title: "Example2-1.0.4",
        navigation: "Example2-1.0.5",
        modelname: "Enter Model Name",
        dependent: "Dependent variable",
        independent: "Independent variable(s)",
        nointercept: "Ignore intercept",
        generateplotchk: "Plot residuals vs fitted, normal Q-Q , scale-location and residuals vs leverage",
        weights: "Specify a variable with weights",
        help: {
            title: "Example2",
            r_help: "help(lm, package ='stats')",
            body: `
            <b>Description</b></br>
Builds a linear regression model. Internally calls function lm in stats package. Returns an object called BSkyLinearRegression which is an object  of class lm. Displays a summary of the model, coefficient table, Anova table and sum of squares table and plots the following  residuals vs. fitted, normal Q-Q, theoretical quantiles, residuals vs. leverage. You can optionally specify a variable with weights and choose to ignore the intercept.
<br/>
<b>Usage</b>
<br/>
<code> 
LinearRegModel1 <- lm(depVar~indepVars, dataset)​<br/>
#Summarizing the model<br/>
summary(LinearRegModel1)<br/>
#Displaying the Anova table<br/>
anova(LinearRegModel1)<br/>
#Plots residuals vs. fitted, normal Q-Q, scale-location, residuals vs. leverage<br/>
plot(LinearRegModel1)<br/>
</code> <br/>
<b>Arguments</b><br/>
<ul>
<li>
depVar: Name of the dependent variable.  If we have a dataset cars, with a variable mpg that we want to predict mpg (dependent variable is mpg) enter mpg​
</li>
<li>
indepVars: Names of the dependent variable. If we have a dataset cars, with dependent  variable horsepower, enginesize, enter horsepower+enginesize. Categorical variables are automatically dummy coded.​
</li>
<li>
dataset: Name of the dataframe. When you open data frames or datasets e.g. csv, Excel files, SAS files in BlueSky Statistics, they are named Dataset1, Dataset2, Dataset3 so enter Dataset1
</li>
</ul>
<b>Package</b></br>
stats</br>
<b>Help</b></br>
help(lm, package ='stats')
			`}
    }
}

class Example2 extends baseModal {
    constructor() {
        var config = {
            id: "Example2",
            label: localization.en.title,
            modalType: "two",
            RCode: `
require(equatiomatic)
require(textutils)
#Creating the model
{{selected.modelname | safe}} = lm({{selected.dependent | safe}}~{{selected.independent | safe}}, {{ if (options.selected.weights != "")}}weights ={{selected.weights | safe}},{{/if}} na.action=na.exclude, data={{dataset.name}})

#Display theoretical model equation and coefficients
#Display theoretical model
reg_formula = equatiomatic::extract_eq({{selected.modelname | safe}}, raw_tex = FALSE,\n\t wrap = TRUE, intercept = "alpha", ital_vars = FALSE) 
BSkyFormat(reg_formula)
#Display coefficients
reg_equation = equatiomatic::extract_eq({{selected.modelname | safe}}, use_coefs = TRUE,\n\t wrap = TRUE,  ital_vars = FALSE, coef_digits = BSkyGetDecimalDigitSetting() )
BSkyFormat(reg_equation)
#Summarizing the model
BSky_LM_Summary_{{selected.modelname | safe}} = summary({{selected.modelname | safe}})
BSkyFormat(BSky_LM_Summary_{{selected.modelname | safe}}, singleTableOutputHeader = "Model Summary")
`
        };
        var objects = {
            content_var: { el: new srcVariableList(config, {action: "move"}) },
            modelname: {
                el: new input(config, {
                    no: 'modelname',
                    label: localization.en.modelname,
                    placeholder: "",
                    required: true,
                    type: "character",
                    extraction: "TextAsIs",
                    value: "LinearRegModel1",
                    overwrite: "dataset"
                })
            },
            dependent: {
                el: new dstVariable(config, {
                    label: localization.en.dependent,
                    no: "dependent",
                    filter: "Numeric|Scale",
                    extraction: "NoPrefix|UseComma",
                    required: true,
                }), r: ['{{ var | safe}}']
            },
            independent: {
                el: new dstVariableList(config, {
                    label: localization.en.independent,
                    no: "independent",
                    required: true,
                    filter: "String|Numeric|Logical|Ordinal|Nominal|Scale",
                    extraction: "NoPrefix|UsePlus",
                }), r: ['{{ var | safe}}']
            },
         /*    nointercept: {
                el: new checkbox(config, {
                    label: localization.en.nointercept,
                    no: "nointercept",
                    bs_type: "valuebox",
                    extraction: "BooleanValue",
                    true_value: "TRUE",
                    false_value: "FALSE",
                })
            }, */
          /*  generateplotchk: {
                el: new checkbox(config, {
                    label: localization.en.generateplotchk,
                    no: "generateplotchk",
                    style: "mt-2 mb-3",
                    bs_type: "valuebox",
                    extraction: "BooleanValue",
                    true_value: "TRUE",
                    false_value: "FALSE",
                })
            },*/
            weights: {
                el: new dstVariable(config, {
                    label: localization.en.weights,
                    no: "weights",
                    filter: "String|Numeric|Date|Logical|Ordinal|Nominal|Scale",
                    extraction: "NoPrefix|UseComma",
                }), r: ['{{ var | safe}}']
            },
        };
        const content = {
            left: [objects.content_var.el.content],
            right: [objects.modelname.el.content, objects.dependent.el.content, objects.independent.el.content, objects.weights.el.content],
			// right: [objects.modelname.el.content, objects.dependent.el.content, objects.independent.el.content, objects.generateplotchk.el.content, objects.weights.el.content],
            nav: {
                name: localization.en.navigation,
                icon: "icon-linear_regression_white_comp",
                modal: config.id
            }
        };
        super(config, objects, content);
        this.help = localization.en.help;
    }
}
module.exports.item = new Example2().render()