module.exports = class SsrState {
	constructor() {
		this._state = {
			body: '',
			styles: '',
		};
	}

	_isString(x) {
		return typeof x === 'string';
	}

	set state(newState) {
		if (Object.prototype.toString.call(newState) === '[object Object]') {
			this._state = { ...this._state, ...newState };
		} else {
			this.state = newState;
		}
	}

	set styles(str) {
		if (!this._isString(str)) {
			console.warn('Unable to set SSR styles to: ' + str);
			return;
		}
		this._state.styles = str;
	}

	set body(str) {
		if (!this._isString(str)) {
			console.warn('Unable to set SSR body to: ' + str);
			return;
		}
		this._state.body = str;
	}

	get state() {
		return this._state;
	}
};
