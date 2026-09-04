import './App.css'

function MyComponent(){
  return <h1>您好呀</h1>
}


function App(){
  const text = "hollo world"
  const alertClick = ()=>{
    alert("測試")
  }
  
  const listItems = [
        <MyComponent key="0"/>,
        <MyComponent key="1"/>,
        <MyComponent key="2"/>
  ]

    const listMapItems = [
    {content: '張三', id: 'abc'},
    {content: '李四', id: 'xyz'},
    {content: '王五', id: 'qaz'},
  ];

  const noFour = listMapItems.filter((item)=> {
    if(item.content != "李四"){
      return true ;
    }
  })

  return (
    <>
    <button onClick={alertClick}>按鈕</button>
    <h1 className="title" style={{backgroundColor:"red"}}>{text}</h1>
    <MyComponent/>
    <hr /> <hr />  
    {listItems}
    <hr /> <hr />  

</>
  )
}

export default App
