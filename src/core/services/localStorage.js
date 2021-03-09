import { DEVICE_ID_NAME } from '@js/constants/constants';

const saveTagIdInStorage = (deviceId) => {
  const stringify = JSON.stringify(deviceId);
  localStorage.setItem(DEVICE_ID_NAME, stringify);
};

const getTagIdFromStorage = () => {
  const deviceId = JSON.parse(localStorage.getItem(DEVICE_ID_NAME));
  return deviceId || [];
};

export {
  saveTagIdInStorage,
  getTagIdFromStorage,пше
};
