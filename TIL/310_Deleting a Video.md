# Deleting a Video

### 1. Delete Video

- route.js에 보면 deleteVideo route가 id를 갖는 것을 알 수 있음

  이전과 같이 construct 진행

  ```js
  // deleteVideo: (DELETE_VIDEO)
  deleteVideo: (id) => {
          if(id){
              return `/videos/${id}/delete`;
          } else {
              return DELETE_VIDEO;
          }
  }
  ```
- editVideo.pug

  href 부분을 routes에서 video id로 deletevideo 함수를 실행하도록 변경

  ```
  //a.form-container__link.form-container__link--delete(href=`/videos${routes.deleteVideo}`) Delete Video 
  a.form-container__link.form-container__link--delete(href=routes.deleteVideo(video.id)) Delete Video
  ```

- videoController.js

  ```js
  export const deleteVideo = async(req, res) => {
     const {
         params: { id}
     } = req;
     try{
         await Video.findOneAndRemove({_id: id })
     }catch(error){
     }
     res.redirect(routes.home); //삭제 성공 여부와 상관없이 home으로 이동
  };
  ```

- videoRouter.js

  deleteVideo는 string을 return하는 function

  ```js
  //videoRouter.get(routes.deleteVideo, deleteVideo);
  videoRouter.get(routes.deleteVideo(), deleteVideo);
  ```