

const NavbarComponent = (props)=>{

    return <>
    <div style={{display: 'flex', flexDirection: 'column',justifyContent:'center'}}>
        <div style={{width: '100vh', display: 'flex', justifyContent: "space-evenly", color: "white", backgroundColor: '#616061',opacity:1, paddingTop: '12px',paddingBottom: '12px', /*border: '2px solid cyan', */borderRadius: '12.5rem'}}>
            <div><a href="http://localhost:3000/#about">About</a></div>
            <div>Experience</div>
            <div>Projects</div> 
            <div>Contact</div>
            {/* <div>Something</div> */}
        </div>
        <div style= {{color:'white', fontSize: '16px',bottom: 0, zIndex: 100, position: 'sticky', display: 'flex', justifyContent: 'center'}}>@Bhoomik Shetty</div>
    </div>
    </>
}

export default NavbarComponent