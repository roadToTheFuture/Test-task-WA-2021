import { DEVICE_ID_NAME } from '@js/constants/constants';

const saveDeviceIdInStorage = (deviceId) => {
  const stringify = JSON.stringify(deviceId);
  localStorage.setItem(DEVICE_ID_NAME, stringify);
};

const getDeviceIdFromStorage = () => {
  const deviceId = JSON.parse(localStorage.getItem(DEVICE_ID_NAME));
  return deviceId || [];
};

export {
  saveDeviceIdInStorage,
  getDeviceIdFromStorage,
};
