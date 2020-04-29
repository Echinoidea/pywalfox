export const MIN_REQUIRED_DAEMON_VERSION = 2.0;
export const PYWAL_PALETTE_LENGTH = 18;
export const INJECT_URL_PATTERN = [ "*://*.duckduckgo.com/*" ];
export const SETTINGS_PAGE_URL = 'dist/settings.html';
export const UPDATE_PAGE_URL = 'update.html';

export const DEFAULT_PALETTE = {
  background: "#252525",
  foreground: "#ffffff",
  backgroundLight: "#444444",
  accentPrimary: "#0284f7",
  accentSecondary: "#0284f7",
  text: "#ffffff"
};

export const DEFAULT_THEME_TEMPLATE_DARK = {
  palette: {
    background: 0,
    backgroundLight: 17,
    foreground: 15,
    accentPrimary: 1,
    accentSecondary: 2,
    text: 16,
    /* icons: 1, */
    /* icons_attention: 2, */
    /* frame: 0, */
    /* tab_text: 0, */
    /* tab_loading: 1, */
    /* tab_background_text: 16, */
    /* tab_selected: 15, */
    /* tab_line: 15, */
    /* tab_background_separator: 0, */
    /* toolbar: 0, */
    /* toolbar_field: 0, */
    /* toolbar_field_focus: 0, */
    /* toolbar_field_text: 16, */
    /* toolbar_field_text_focus: 16, */
    /* toolbar_field_border: 0, */
    /* toolbar_field_border_focus: 0, */
    /* toolbar_field_separator: 0, */
    /* toolbar_field_highlight: 1, */
    /* toolbar_field_highlight_text: 16, */
    /* toolbar_bottom_separator: 0, */
    /* toolbar_top_separator: 0, */
    /* toolbar_vertical_separator: 17, */
    /* ntp_background: 0, */
    /* ntp_text: 15, */
    /* popup: 0, */
    /* popup_border: 17, */
    /* popup_text: 16, */
    /* popup_highlight: 2, */
    /* popup_highlight_text: 16, */
    /* sidebar: 0, */
    /* sidebar_border: 17, */
    /* sidebar_text: 15, */
    /* sidebar_highlight: 1, */
    /* sidebar_highlight_text: 16, */
    /* bookmark_text: 16, */
    /* button_background_hover: 17, */
    /* button_background_active: 17, */
  }
};

export const DEFAULT_THEME_TEMPLATE_LIGHT = {
  palette: {
    background: 16,
    backgroundLight: 15,
    foreground: 17,
    accentPrimary: 1,
    accentSecondary: 2,
    text: 0,
  }
}

export const VALID_CSS_TARGETS = [
  "userChrome",
  "userContent"
];

export const EXTERNAL_MESSAGES = {
  COLORSCHEME: "colors",
  DISABLED: "disabled"
};

export const EXTENSION_MESSAGES = {
  DEBUGGING_INFO_GET: "debugging:info:get",
  DEBUGGING_INFO_SET: "debugging:info:set",
  DEBUGGING_OUTPUT: "debugging:output",
  THEME_FETCH: "theme:fetch",
  THEME_DISABLE: "theme:disable",
  THEME_SET: "theme:set",
  THEME_MODE_SET: "theme:mode:set",
  THEME_MODE_GET: "theme:mode:get",
  TEMPLATE_SET: "template:set",
  TEMPLATE_GET: "template:get",
  PYWAL_COLORS_GET: "pywal:colors:get",
  PYWAL_COLORS_SET: "pywal:colors:set",
  OPTION_GET: "option:get",
  OPTION_SET: "option:set",
  FONT_SIZE_SET: "font:size:set",
  FONT_SIZE_GET: "font:size:get",
  NOTIFCATION: "notification",
  CSS_ENABLE: "css:enable",
  CSS_DISABLE: "css:disable",
  CSS_ENABLE_SUCCESS: "css:enable:success",
  CSS_ENABLE_FAILED: "css:enable:failed",
  CSS_DISABLE_SUCCESS: "css:disable:success",
  CSS_DISABLE_FAILED: "css:disable:failed",
  DDG_THEME_GET: "ddg:theme:get",
  DDG_THEME_SET: "ddg:theme:set",
  DDG_THEME_RESET: "ddg:theme:reset",
};

export const EXTENSION_OPTIONS = {
  FONT_SIZE: "fontSize",
  USER_CHROME: "userChrome",
  USER_CONTENT: "userContent",
  DUCKDUCKGO: "duckduckgo",
};

export const MESSAGES = {
  VERSION: "debug:version",
  OUTPUT: "debug:output",
  COLORSCHEME: "action:colors",
  INVALID_ACTION: "action:invalid",
  CSS_ENABLE: "css:enable",
  CSS_DISABLE: "css:disable"
};
