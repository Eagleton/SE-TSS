import React, {Component} from 'react';
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Button} from "material-ui"

const editorStyle = {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    height: 300
}


export default class PostEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
        this.onEditorStateChange = this.onEditorStateChange.bind(this)
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    };

    render() {
        const {editorState} = this.state;
        return (
            <div style={{
                paddingBottom: 80,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <input
                    style={{
                        margin: '10px 0',
                        boxSizing: 'border-box',
                        border: 0,
                        width: '100%',
                        padding: 10,
                        backgroundColor: '#ffffff',
                        fontSize: 18,
                        height: 40
                    }}
                    placeholder={'帖子标题'}/>
                <Editor
                    editorState={editorState}
                    // wrapperClassName={editorStyle}
                    editorStyle={editorStyle}
                    onEditorStateChange={this.onEditorStateChange}
                />
                <Button
                    style={{margin: 20}}
                    color={'primary'}
                    variant={'raised'}
                    size={'large'}
                >发布</Button>
            </div>
        )
    }
}

