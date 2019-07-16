import '../css/style.css';
import axios from 'axios';
import UserModel from './models/UserModel';
import LoaderView from './views/LoadView';
import CleanView from './views/CleanView';
import WellcomeView from './views/WellcomeView';
import ErrorView from './views/ErrorView';
import DataListView from './views/DataListViiew';

import Items from './utils/Items';

const STATE = {};

// Wellcome controller
const WelcomeController = () => {
  CleanView.RenderCleanContainer();
  WellcomeView.RenderWellcome();
  document.querySelector(Items.getYoursData).addEventListener('click', () => {
    SpinnerController();
  });
};

//  Onload controller
const SpinnerController = () => {
  STATE.canselrequest = false;
  CleanView.RenderCleanContainer();
  LoaderView.RenderLoader();
  document
    .querySelector(Items.goToWellcomeFromSpinner)
    .addEventListener('click', () => {
      STATE.canselrequest = true;
      WelcomeController();
    });
  const email = STATE.User.getEmail();
  axios
    .post('http://localhost:4000/api/ext/getdata', {
      email,
    })
    .then(res => {
      const { data } = res;
      if (data.isError) {
        // redirect to error page
        if (!STATE.canselrequest) {
          ErrorControler();
        }
      } else {
        // redirect to data page
        if (!STATE.canselrequest) {
          DataListController(data.data);
        }
      }
    });
};

//  Error controller
const ErrorControler = () => {
  CleanView.RenderCleanContainer();
  ErrorView.RenderError();
  document
    .querySelector(Items.goToWellcomeFromError)
    .addEventListener('click', () => {
      WelcomeController();
    });
};

const DataListController = data => {
  CleanView.RenderCleanContainer();
  DataListView.RenderDataList(data);
  document
    .querySelector(Items.goToWellcomeFromList)
    .addEventListener('click', () => {
      WelcomeController();
    });
  document
    .querySelector(Items.goToSpinnerFromList)
    .addEventListener('click', () => {
      SpinnerController();
    });
  Array.from(document.querySelectorAll(Items.dataContainer)).forEach(el =>
    el.addEventListener('click', e => {
      const container = Array.from(
        e.target.closest(Items.dataContainer).children
      );
      let btn;
      container.forEach(el => {
        if (el.classList.contains('list-value')) {
          btn = el;
        }
      });
      const range = document.createRange();
      range.selectNode(btn);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
    })
  );
};

window.onload = () => {
  WelcomeController();
  STATE.User = new UserModel();
  chrome.identity.getProfileUserInfo(data => {
    STATE.User.setEmail(data.email);
  });
  setTimeout(() => {
    if (!STATE.User.email) {
      chrome.identity.getAuthToken(
        {
          interactive: true,
        },
        function (token) {
          if (chrome.runtime.lastError) {
            alert(chrome.runtime.lastError.message);
            return;
          }
          const x = new XMLHttpRequest();
          x.open(
            'GET',
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`
          );
          x.onload = function () {
            alert(x.response);
          };
          x.send();
        }
      );
    }
  }, 1500);
};
