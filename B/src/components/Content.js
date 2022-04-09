import { useState } from 'react'
import { RiArrowRightFill,RiLoader2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { typeButtons } from '../constant'
import { shortenLink } from '../redux/actions/link.actions'

const Content = ({ typeShorten, setTypeShorten }) => {
   const [url, setUrl] = useState('')
   const dispatch = useDispatch()

   const handleChange = e => {
      setUrl(e.target.value)
   }
   const handleShortenLink = () => {
      dispatch(shortenLink(url))
   }
   return (
      <div className="content">
         <h1>Link Shortener</h1>
         <div className='content__form'>
            <div className='content__form-inputlink'>
               <label>Enter a link: </label>
               <input value={url} placeholder="example.com" onChange={handleChange} />
               <button onClick={handleShortenLink}> <RiArrowRightFill /> </button>
            </div>
            <div className='content__form-linktype'>
               <label>Short domain: </label>
               {
                  typeButtons.map((item) => (
                     <button
                        onClick={() => setTypeShorten({ id: item.id, type: item.type })}
                        className={typeShorten.id === item.id ? 'selected' : ''}
                        key={item.id}
                     >
                        {item.type}
                     </button>
                  ))
               }
            </div>
         </div>
         <div className='content__desc'>
            With this free Link Shortener you can make Links shorter and easier to
            remember. Just enter a Link into the form and click on the above Button to
            generate a short Link. When visiting the short-Link, the short-Link will
            immediately redirect you to the long Link.
         </div>
      </div>
   )
}
export default Content