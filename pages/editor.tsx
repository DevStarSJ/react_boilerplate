import Layout from '@components/Layout'
import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import { Button } from 'antd'

const settings = {
  toolbar: {
    container: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
              ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
              ['blockquote', 'code-block'],                    // blocks
              [{'list': 'ordered'}, {'list': 'bullet'},
               { 'indent': '-1'}, { 'indent': '+1' }],         // outdent/indent
               [{ 'script': 'sub'}, { 'script': 'super' }],     // superscript/subscript
               ['link', 'image', 'video'],
              [{ 'direction': 'rtl' }],                        // text direction
              [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
              [{ 'align': [] }],                               // text align
              ['clean'],                                       // remove formatting
    ],
  },
  // imageUpload: {
  //   url: "<내 image upload API 주소>", // server url
  //   method: "POST", // change query method, default 'POST'
  //   name : 'images', // 아래 설정으로 image upload form의 key 값을 변경할 수 있다.
  //   // headers: {
  //   //   Authorization: `Bearer ${<내 토큰 값>}`, 
  //   //   'X-Total-Count': 0,
  //   // },
  //   callbackOK: (serverResponse, next) => { // 성공하면 리턴되는 함수
  //       next(serverResponse);
  //   },
  //   callbackKO: (serverError) => { // 실패하면 리턴되는 함수
  //     console.log(serverError);
  //       // alert(serverError);
  //   },
  //   // optional
  //   // add callback when a image have been chosen
  //   checkBeforeSend: (file, next) => {
  //       console.log(file);
  //       next(file); // go back to component and send to the server
  //   }
  // },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  // imageDrop: true, // imageDrop 등록
  // imageResize: {} // imageResize 등록
}

const formats = [
  'header', 'font', 'background', 'color', 'code', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'script', 'align', 'direction',
  'link', 'image', 'code-block', 'formula', 'video'
]

function download(filename: string, text: string) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

export default function index() {
  const [value, setValue] = useState('')
  console.log(value)

  const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false

  return (
    <Layout title="Socio > Editor">
      <ReactQuill theme="snow" value={value} onChange={setValue}
        modules={settings}
        formats={formats}
      />
      <div>{value}</div>
      <hr />
      <Button type="primary" onClick={ () => {
        download('test.html', value);
      }}>Save</Button>
    </Layout>
  )
}