
function ProfileInfo() {
	return (
			<div className="col-4">
			    <div className="bio p-2 border-start mt-0">
				    <h5 className='ps-2'>Intro</h5>
				    <p className='font-monospace text-center'>hello world!</p>
			    </div>
			    <div className="bio p-2 border-start">
				    <h5 className='ps-2'>Contacts</h5>
				       <p className='font-monospace text-start'><i class="fa-solid fa-phone"></i> <span>+880123456789</span> </p>
				       <p className='font-monospace text-start'><i class="fa-solid fa-envelope"></i> <span>sdfa@gmail.com</span> </p>
				       <p className='font-monospace text-start'><i class="fa-brands fa-github"></i> <span>sdfdsf</span> </p>
			    </div>
			    <div className="bio p-2 border-start">
				    <h5 className='ps-2'>Education</h5>
				    <p className='font-monospace text-start'>Lorem ipsum dolor sit amet consectetur - <span>status</span> </p>
			    </div>
				
			</div>
	)
}

export default ProfileInfo;