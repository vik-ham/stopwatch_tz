import './number_container.css';

function Number_container({time}) {
  return (
    <div className="Number_container"> 
            <span className='Number_container_span'>{('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}</span>&nbsp;:&nbsp;  
            <span className='Number_container_span'>{('0' + Math.floor(time / 6000)).slice(-2)}</span>&nbsp;:&nbsp;  
            <span className='Number_container_span'>{('0' + Math.floor((time / 100) % 60)).slice(-2)}</span>&nbsp;:&nbsp;  
            <span className='Number_container_span'>{('0' + Math.floor(time % 100)).slice(-2)}</span>  
    </div>
  );
}

export default Number_container;
