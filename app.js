import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';
import cowsay from 'cowsay';
let input =process.argv.slice(2);
input = `${input}`;
const langcode = franc(input)
if(langcode == 'und'){
    console.log(cowsay.say({
        text : 'Sorry could not guess'.red,
        e : "oO",
        T : "U"
    }))
}
else
{
const text = (langs.where("3",langcode).name).green;
console.log(console.log(text))
}
