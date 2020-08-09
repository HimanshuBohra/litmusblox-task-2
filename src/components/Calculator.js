import React , {Component} from "react"
import { render } from "react-dom"

class Calculator extends Component{

      state = {
          box : '0',
          count : '0',
          NumberButton: [
            {
              id: 1,
              value : '1'
            },
            {
              id: 2,
              value : '2'
            },
            {
              id: 3,
              value : '3'
            },
            {
              id: 4,
              value : '4'
            },
            {
              id: 5,
              value : '5'
            },
            {
              id: 6,
              value : '6'
            },
            {
              id: 7,
              value : '7'
            },
            {
              id: 8,
              value : '8'
            },
            {
              id: 9,
              value : '9'
            },
            {
              id: 0,
              value : '0'
            },
            {
              id : 10,
              value : '.'
            },
            {
              id : 16,
              value : 'C'
            }
          ],
          OperatorButton :[
            {
              id: '*',
              value: "*"
            },
            {
              id: '+',
              value: "+"
            },
            {
              id: '-',
              value: "-"
            },
            {
              id: '/',
              value: "/"
            },
            {
              id : 15,
              value : '='
            }
            
          ]
      }

      reset=()=>{
          const {box} = this.state
          this.setState({
            count : '0',
            box : '0'
          })
      }
      addDot=()=>{
        const {box} = this.state
        const {count} = this.state
        console.log(box)
        if(!box.includes('.')){
          this.setState({
              count : count+'.',
              box : box+'.'
          })
        }
      }
      Number=(digit)=>{
            const {count} = this.state
            const {box} = this.state
            if(digit === 'C'){
              this.reset();
              return;
            }
            if(digit.id === '.'){
                this.addDot();
                return;
            }
            this.setState({
                box:box==='0'?String(digit):box+digit,
                count:count==='0'?String(digit):count+digit
            })
      }
      
      Operator=(op)=>{
        const {count} = this.state
        const {box} = this.state
        if(op.id === 15){
              this.setState({
                box:eval(count)
            })
            return;
        } 
        this.setState({
          box : '0',
          count:count==='0'?String(op):count+op.value  
      })
      }
      render(){
        const calButton = this.state.NumberButton.map((singleButton) => {
          return (
              <button onClick={() => this.Number(singleButton.value)} className="button">{singleButton.value}</button>
          );
        });

        const operatorButton = this.state.OperatorButton.map((singleButton) => {
          return (
              <button onClick={() => this.Operator(singleButton)} className="button">{singleButton.value}</button>
          );
        });        
          return (
            <div>
                  <div>
                      <input className="calculate" type="text" value={this.state.box}/>
                  </div>
                  <div>
                            {calButton}
                  </div>
                  <div >
                            {operatorButton}
                  </div>
            </div>
          )
      }
}
export default Calculator