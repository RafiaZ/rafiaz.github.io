
import './App.css';

let current_date = new Date(2020,5,5, 1);
current_date = current_date.getHours();
let greeting = '';
let css_style = {};


if(current_date >= 1 && current_date <= 12){

  greeting = 'Good Morning!';
  css_style.color = 'green';

}
else if(current_date>=13 && current_date<=18){
   greeting = 'Good Afternoon!';
   css_style.color ="orange";
}
else{
  greeting ='Good Night!';
  css_style.color = "black";
}

function App()
 {
  return (
    <>
    <div>
        <h1 >Hi there, <span style={css_style}> {greeting}</span></h1>
    </div>
    </>
  );
}

export default App;
