/**
 * Language.js
 * 언어팩 데이터
 * [ 지원 ]
 * : 한국어
 * : 영어
 */

/* Korean */
const $kor = {
  greet: '반갑습니다',
  setting: '설정',
  drawer: [
    {
      text: '새 비주얼 생성',
      name: 'create'
    },
    {
      text: '비주얼 불러오기',
      name: 'load'
    },
    {
      text: '정보',
      name: 'info'
    }
  ],
  settings: {
    language: '언어',
    fullscreen: {
      text: '전체 화면',
      enable: '활성화',
      disable: '비활성화'
    },
    lastest: '최신 버전',
    current: '현재 버전'
  },
  info: {
    introduce: 'Electron + Vue.js 기반의 데이터 시각화 도구입니다',
    system: '시스템 정보'
  },
  create: {
    name: '비주얼 이름',
    type: '차트 유형',
    submit: '비주얼 생성',
    already: '이미 파일이 존재합니다: ',
    created: '새 비주얼이 생성되었습니다!',
    blank: '비주얼 이름과 타입은 필수 항목입니다.',
    save: '비주얼 파일 저장 디렉토리 선택'
  }
}

/* English */
const $eng = {
  greet: 'Welcome',
  setting: 'Setting',
  drawer: [
    {
      text: 'Create new Visual',
      name: 'create'
    },
    {
      text: 'Load Visual',
      name: 'load'
    },
    {
      text: 'Information',
      name: 'info'
    }
  ],
  settings: {
    language: 'Lauguage',
    fullscreen: {
      text: 'Full screen',
      enable: 'Enable',
      disable: 'Disable'
    },
    lastest: 'Lastest version',
    current: 'Current Version'
  },
  info: {
    introduce: 'Electron + Vue.js based data visualization tool',
    system: 'System Information'
  },
  create: {
    name: 'Visual Name',
    type: 'Chart type',
    submit: 'Create Visual',
    already: 'File already exists: ',
    created: 'New visual Created!',
    blank: 'Visual name and Type are required.',
    save: 'Choose Visual file save directory'
  }
}

export default {
  langs: [
    {
      lang: 'kr',
      kr: '한국어',
      en: 'Korean'
    },
    {
      lang: 'en',
      kr: '영어',
      en: 'English'
    }
  ],
  kr: $kor,
  en: $eng
}
