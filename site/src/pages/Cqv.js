import React from 'react'
import Data from'../Data1.json'
import Back from '../components/Back'
import Heading from '../components/Heading'
import img from "../images/img5.jpeg"

function Cqv () {
  return (
    <div classname='CQV'>
      <Back name='CQV' title='Commissioning, Qualification and Validation' cover={img} />
        <div className='containerflexmtop'>
        <div className="Contents">
          <div className='left row'>
            
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
      <br/>
      <p>{Data.data.CQV.Intro}</p>  
      <br/>
       <p>{Data.data.CQV.Content1}</p>
       <p>{Data.data.CQV.line1}</p>
       <ul className='dottes-list'>
       <li>{Data.data.CQV.Content2}</li>
       <li>{Data.data.CQV.Content3}</li>
       <li>{Data.data.CQV.Content4}</li>
       <li>{Data.data.CQV.Content5}</li>
       <li>{Data.data.CQV.Content6}</li>
       <li>{Data.data.CQV.Content7}</li>
       <li>{Data.data.CQV.Content8}</li>
       <li>{Data.data.CQV.Content9}</li>
       <li>{Data.data.CQV.Content10}</li>
       <li>{Data.data.CQV.Content11}</li>
       <br/>
      
    </ul>
    <ul>
       <li>{Data.data.CQV.Content13}</li>
       <li>{Data.data.CQV.Content14}</li>
       <li>{Data.data.CQV.Content15}</li>
       <li>{Data.data.CQV.Content16}</li>
       <li>{Data.data.CQV.Content17}</li>
       <li>{Data.data.CQV.Content18}</li>
       <li>{Data.data.CQV.Content19}</li>
       <li>{Data.data.CQV.Content20}</li>
       </ul>
       <br/>
       </div>
    </div>
    </div>
    </div>
  )
}

export default Cqv