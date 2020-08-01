const axios = require('axios');

// start
function start() {

  axios.get('https://lidemy-http-challenge.herokuapp.com/start')
    .then((res) => {
      console.log(res.data)
    }).catch((err => {
      console.log(err)
    }))
}

// lv1
function lv1() {
  axios.get('https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}&name=lauviah')
    .then((res) => {
      console.log(res.data)
    }).catch((err => {
      console.log(err)
    }))
}

// https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba

function lv2() {
  axios.get('https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}&name=lauviah&id=56')
    .then((res) => {
      console.log(res.data)
    }).catch((err => {
      console.log(err)
    }))

}

function name(params) {
  axios.get('https://lidemy-http-challenge.herokuapp.com/api/books')
    .then((res) => {
      console.log(res.data.filter(e => e.id <= 58 && e.id >= 54))
    }).catch((err => {
      console.log(err)
    }))

}

// lv2()
// name()

function req(url, cb, data) {
  cb = cb ? cb : res => console.log(res.data);
  if (data) {
    axios.post(url, data)
      .then(res => {
        cb(res)
      }).catch(err => {
        console.log(err)
      })

  } else {
    axios.get(url)
      .then((res) => {
        cb(res)
      }).catch((err => {
        console.log(err)
      }))
  }
}

// lv3()
function lv3(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}&name=lauviah&id=1989')
}
const querystring = require('querystring');
const { lookupService } = require('dns');
const { ftruncateSync } = require('fs');

function addBook() {
  let data = querystring.stringify({
    name: '大腦喜歡這樣學',
    ISBN: '9789863594475'
  })
  console.log(data)
  axios({
    method: 'POST',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/books',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data
  }).then(res => {
    console.log(res.data)
  })

}


// lv4
function lv4(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}&name=lauviah&id=79')
}

function searchBook(params) {

  req('https://lidemy-http-challenge.herokuapp.com/api/books?q=%E4%B8%96%E7%95%8C')
}
// searchBook()
// lv4()

//lv5
function lv5(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv5?token={HarukiMurakami}&name=lauviah')
}
// lv5()

function dBk(params) {
  axios({
    method: 'DELETE',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/books/23'
  }).then(e => {
    console.log(e.data)
  })
}
// dBk()


//lv6
function lv6(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}&name=lauviah&email=lib@lidemy.com')
}
// lv6()

function author(params) {
  axios({
    method: 'GET',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/me',
    headers: {
      Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
    }
  }).then(e => {
    console.log(e.data)
  })
}

// author()

function lv7(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv7?token={SECurityIsImPORTant}&name=lauviah')
}
// lv7()
function search(params) {
  axios({
    method: 'DELETE',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/books/89',
    headers: {
      Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
    }
  }).then(e => {
    console.log(e.data)
  })
}
// search()
//{HsifnAerok}\n

function lv8(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv8?token={HsifnAerok}&name=lauviah')
}
// lv8()

function update(params) {
  const data = querystring.stringify({
    name: '日日好日：茶道教我的幸福15味【電影書腰版】',
    ISBN: 9981835423
  })
  axios({
    method: 'PATCH',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/books/72',
    headers: {
      Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
    },
    data
  }).then(e => {
    console.log(e.data)
  }).catch(e=> {
    console.log(e)
  }
  )
}


// {
//   id: 72,
//   name: '日日好日：茶道教我的幸福15味【電影書腰版】',
//   author: '森下典子',
//   ISBN: '9981835427'
// },
// update()


//{NeuN}

function lv9(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}&name=lauviah&version=1A4938Jl7')
}
// lv9()

function sysInfo(params) {
  const data = querystring.stringify({
    name: '日日好日：茶道教我的幸福15味【電影書腰版】',
    ISBN: 9981835423
  })
  axios({
    method: 'GET',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/sys_info',
    headers: {
      Authorization: 'Basic YWRtaW46YWRtaW4xMjM=',
      'X-Library-Number': 20,
      'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)'
    }
  }).then(e => {
    console.log(e.data)
  }).catch(e=> {
    console.log(e)
  }
  )
}
// sysInfo()

// message: 'success',
// version: '1A4938Jl7',
// owner: 'lib',
// createdAt: '121290329301'


//  {duZDsG3tvoA}
function lv10() {
  req('https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}&name=lauviah')
}

function guess(num) {
  // console.log(num)
  axios.get('https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}&name=lauviah&num=' + num)
  .then((res) => {
    console.log(num, ':', res.data);
    
    if (res.data === '4A0B') {
      console.log(num, ':', res.data);
    }
  }).catch(err => {
    console.log(err)
  })
}
// 9676 2A0B
// guess(9676) // 2A0B

// guess(9999) // 0A0B
// guess(8888) // 1A0B
// guess(7777) // 1A0B
// guess(6666) // 0A0B
// guess(5555) // 0A0B
// guess(4444) // 2A0B
// guess(3333) // 0A0B
// guess(2222) // 1A0B
// guess(1111) // 1A0B
// guess(0000) // 0A0B
const numbers = []
function forceGuess(params) {
  for (let i = 0; i < 1000; i++) {
    let num = i + '';
    while (num.length < 3) {
      num  = '0' + num
    }
    if (isNoRepeatNum(num)) {
      guess('9' + num)
      // numbers.push('9' + num)
    }
  }
  
  console.log(numbers)
}

function isNoRepeatNum(str) {
  let result = true;
  for ( let i = 0; i < str.length; i++) {
    const backward = str.lastIndexOf(str[i])
    // console.log(backward)
    if (backward !== i) {
      result = false
    }
  }
  return result
}
// forceGuess()
// lv10()

// 9613 :
// 很開心在這裡的時光能有你一起陪伴，讓我的生活不再那麼一成不變，很開心認識你，下次有機會再一起玩吧！     

// The End，恭喜破關！

// author: huli@lidemy.com
// https://www.facebook.com/lidemytw/

// 附註：
// 原本遊戲只規劃到這邊，第十關就是最後一關。
// 後來我有加了一些新關卡但難度較高，如果你還想挑戰看看，下一關的 token 為 {IhateCORS}

function lv11(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv11?token={IhateCORS}&name=lauviah', null, {

  })

}

// lv11()
// bwtOLtp99tvCd5I+je3zhGzkgH4=
function hi() {
  axios({
    method: 'GET',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v3/hello',
    headers: {
      'Origin': 'https://lidemy.com'
    }
  }).then(e => {
    console.log(e.data)
    console.log(e.headers)
  }).catch(e=> {
    console.log(e)
  }
  )
}

// hi()

//lv12

// {r3d1r3c7}


function lv12(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv12?token={r3d1r3c7}', res => {
    console.log(res.data)
    console.log(res.header)
  }, {

  })
}

// lv12()

// lv13
// {qspyz}
function lv13(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv13?token={qspyz}&name=lauviah&hint=1')

}

function getLog(params) {
  axios({
    method: 'GET',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v3/logs',
    headers: {
      'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)',
      // 'proxy': {
      //   host: 'http://119.93.129.34',
      //   port: 80
      // }
    }
  }).then(e => {
    console.log(e.data)
    console.log(e.headers)
  }).catch(e=> {
    console.log(e)
  }
  )
}

// lv13()
// getLog()

//  { logType: 'token', value: '{SEOisHard}' }



// lv14
function lv14(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv14?token={SEOisHard}&name=lauviah')

}

function userAgent(params) {
  axios({
    method: 'GET',
    url: 'https://lidemy-http-challenge.herokuapp.com/api/v3/index',
    headers: {
      'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)',
      // 'proxy': {
      //   host: 'http://119.93.129.34',
      //   port: 80
      // }
    }
  }).then(e => {
    console.log(e.data)
    console.log(e.headers)
  }).catch(e=> {
    console.log(e)
  }
  )
}

// lv14()

// 


function lv15(params) {
  req('https://lidemy-http-challenge.herokuapp.com/lv15?token={ILOVELIdemy!!!}&name=lauviah')

}

lv15()


