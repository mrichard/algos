import test from 'tape';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import App from '../App';
import Note from '../Note/Note';

test('App', (assert) => {
    const shallowRenderer = createRenderer();
    shallowRenderer.render(<App text="This is a test"/>);

    const expected = shallowRenderer.getRenderOutput();

    assert.equal(expected.type, Note, 'Renders Note');
    assert.equal(expected.props.text, 'This is a test', 'Has correct props');
    assert.end();
});
