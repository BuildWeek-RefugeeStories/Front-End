import React, { useState } from 'react';
import './SubmitStory.css'


const SubmitStory = () => {
    return (
        <div className='SubmitStory'>
            <form>
                <h1 className='submit-form'>Submit a Story</h1>
                <div className='ss-Top-Section'>
                     <div className='top-Left'>
                         <span>Title</span>
                         <input></input>
                         <span>Author</span>
                         <input></input>
                         <div id='anonymous'>
                            <input type='checkbox'></input>
                            <p>I prefer to stay anonymous</p>
                         </div> {/* anonymous end */}
                         
                     </div> {/* top-Left end */}

                     <div className='top-Right'>
                            <h4>Writing Resources</h4>
                            <p>For translation assistance, refer to the “Google Translate” link below. Refer to the “Writing Guide” link for tips on conveying your ideas.</p>
                            <div className='top-Right-Links'>
                                <a href='#'>Google Translate</a>
                                <a href='#'>Writing Guide</a>
                            </div>
                     </div> {/* top-Right end */}
                </div> {/* ss-Top-Section end */}
            <div id='ss-Bottom-Section'>
                <div className='ss-Bottom-Section'>
                    <div className='ss-Bottom-left'>
                        <input></input>
                    </div>
                    <div className='ss-Bottom-Right'>
                        <h1>Upload an Image</h1>
                        <i class="fas fa-cloud-download-alt"></i>
                        <p>Drag and Drop</p>
                        <span>or</span>
                        <br/>
                        <button>UPLOAD</button>
                    </div>
                </div> {/* ss-Bottom-Section end */}
                <div className='submit-button'>
                        <button>PREVIEW</button>
                        <button>SUBMIT</button>
                </div> {/* submit-button end */}
            </div>
            </form> {/* submit-form end */}
        </div> /* SubmitStory end */
    )
}

export default SubmitStory;