var React = require('react');
var ReactEmoji = require('react-emoji');
var Markdown = require('react-remarkable');

var mui = require('material-ui');
var IconButton = mui.IconButton;
var Paper = mui.Paper;

var MessageItem = React.createClass({

  mixins: [ReactEmoji],

  propTypes: {
    message: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired
  },

  render: function() {

    var date = new Date(this.props.message.createAt).toLocaleString();
    var disabled = this.props.message.isCreated ? false : true;
    var style = this.props.user._id === this.props.message.userId._id ? 'col-xs-offset-2 col-xs-10' : 'col-xs-10';
    var message = this.emojify(this.props.message.message);

    return (
      <div className="row">
        <Paper zDepth={1} className={style}>
          <div className="box">
            <header className="row">
              <div className="col-xs">
                <div className="box">
                  <IconButton
                    disabled={disabled}
                    mini={true}
                    iconClassName="fa fa-user-secret fa-4x" />
                  {this.props.message.userId.nickname} | {date}
                </div>
              </div>
            </header>
            <div className="row">
              <div className="col-xs">
                <div className="box start-xs markdown">
                  <Markdown>
                    {message}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }

});

module.exports = MessageItem;
