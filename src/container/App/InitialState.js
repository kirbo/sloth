import { findFirstRoute } from '../../assets/utils';

const { name, type } = findFirstRoute();

const INITIAL_STATE = {
  wifiEnabled: false,
  showLoading: true,
  hideLoading: false,
  slackInstancesLoaded: false,
  ssidsLoaded: false,
  ssids: [],
  iface: null,
  slackInstances: [],
  configurations: [],
  expandedRowKeys: [],
  currentToken: null,
  viewType: type,
  selectedView: name,
  drawerConfig: null,
  searchEmoji: '',
  emojiLimit: 100,
};

export default INITIAL_STATE;