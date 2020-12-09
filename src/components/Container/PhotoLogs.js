import "../../style.css";

function PhotoLogs() {
  return (
    //   <div className="row mx-auto p-1 logNewPhotoForm" id="logNewPhotoFrame">
    <div>
        <div class="col-12 col-md-6 mx-auto">
            <div class="card-body logNewPhotoFormDiv">
            <h5 class="text-center">Recent Photo Logs</h5> 
                <form action="/upload" method="post" enctype="multipart/form-data">
                    <label class="btn btn-primary"> 
                        <i class="fa fa-image"></i> Photo
                    </label>
                    <input type="file" name="upload" id="upload"></input>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default PhotoLogs;