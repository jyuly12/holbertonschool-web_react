import * as Utils from './utils';
import React from 'react';


it('Check year', () => {
    expect(Utils.getFullYear()).toEqual(2022);
});

it('Check footer copy', () => {
    expect(Utils.getFooterCopy(true)).toEqual('Holberton School');
    expect(Utils.getFooterCopy(false)).toEqual('Holberton School main dashboard');
})

it('Check latest notifications', () => {
    expect(Utils.getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
})
