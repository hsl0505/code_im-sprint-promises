/*
 * 다음 함수를 CALLBACK 없이 작성하세요.
 * (1) 파일의 담긴 userId들을 Array에 담아 return합니다.
 * (2) Array에 담긴 userId들을 이용해 KoreaJSON API에 요청을 보내, 해당 user정보를 가져옵니다.
 * (JSON 형태로 응답이 옵니다. koreanjson.com을 확인해보세요)
 * (3) KoreanJSON에서 받은 응답들 중 name 값을, 파일에 저장합니다. (텍스트 형태로 저장합니다.)
 *
 * HINT
 * 새로 구현하지 마세요. 이전에 연습문제에서 export한 함수가 Promise를 리턴했던 것을 기억하세요!
 * Promse.all 함수를 사용해보세요.
 */
const fs = require("fs");
const util = require("util");

const {
  getBodyFromGetRequestPromise,
  getDataFromFilePromise
} = require("../exercises/02_promiseConstructor");

const writeFilePromise = util.promisify(fs.writeFile);

/**
 * 파일에서 읽은 userId Array에서 userID들을 가지고와
 * 아래의 BASE_URL 뒤에 붙여서 해당 주소로 get 요청을 보냅니다.
 *
 * 예)
 * 아래의 userId Array를 return 받았을 때
 * [1, 2, 3]
 *
 * 총 3번의 get request를 보냅니다.
 * https://koreanjson.com/users/1
 * https://koreanjson.com/users/2
 * https://koreanjson.com/users/3
 * */

const BASE_URL = "https://koreanjson.com/users/";

const fetchUsersAndWriteToFile = (readFilePath, writeFilePath) => {};

module.exports = {
  fetchUsersAndWriteToFile
};
