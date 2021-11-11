import './btn.css'

function Btn({start, stop, reset, resume, status}) {
  return (
    <div className="Btn">
        {(status === 0) ? 
            <button className="button btn-green" onClick={start}>start</button> : ""
        }
        
        {(status === 1) ?
            <div> 
                <button className="button btn-red" onClick={stop}>stop</button>
                <button className="button btn-yel" onClick={reset}>reset</button>
            </div> : ""
        }

        {(status === 2) ?
              <div>
                  <button className="button btn-blu" onClick={resume}>resume</button>
                  <button className="button btn-yel" onClick={reset}>reset</button>
              </div> : ""
          }
    </div>
  );
}

export default Btn;
