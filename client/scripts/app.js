////////////////////////////////////////////////////////
//JUKEBOX
////////////////////////////////////////////////////////

var JukeboxApp = React.createClass({
  render: function () {
    getInitialState: function(){
      return {
        queriedTracks = [];
      };
    },

    return (
      <section>

        <header className='container text-center'>
          <h1>Jukebox</h1>
        </header>

        <article className='container text-center'>
          <SearchSoundCloud />
          <TrackSelector tracks={ this.state.queriedTracks } />
        </article>

        <footer className='fixed-footer'>
          Footer
        </footer>

      </section>
    )
  }
});

////////////////////////////////////////////////////////
//PLAYBAR
////////////////////////////////////////////////////////

var Playbar = React.createClass({

  render: function() {

    return (
        <h1>Playbar</h1>//<song currentSong= //SONG //Refactor
    )
  }
});

////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////
var TrackShape = {
    title: React.PropTypes.string.isRequired,
    artwork_url: React.PropTypes.string
};

var Track = React.createClass({

  propTypes: {
    track: React.PropTypes.shape(TrackShape).isRequired
  },

  render: function() {

    return (
        <div className='track'>
          <img src={ this.props.track.artwork_url } className='img-thumbnail artwork' />
          <div className='title'>{ this.props.track.title }</div>
        </div>
      )
  }
});

////////////////////////////////////////////////////////
//PLAYLIST
////////////////////////////////////////////////////////

var Playlist = React.createClass({

  render: function (){

   return (
    <h3>PlayList</h3>
    )
  }
});

////////////////////////////////////////////////////////
//SEARCH AREA
////////////////////////////////////////////////////////

// Search Bar
var SearchSoundCloud = React.createClass({

  updateQuery: function(event){
    this.setState({
      query: event.target.value
    })
  },

  getInitialState: function (){
    return {
    query:''
    }
  },

  clearSearch: function(){
    this.setState({
      query:''
    });
  },

  render: function() {

    var iconClasses = 'glyphicon glyphicon-remove form-control-feedback clickable'

    if(this.state.query === '')
      iconClasses += ' hidden';

    return (
      <div>
        <div className='form-group has-feedback'>
          <input className='form-control'
            type='text'
            name='query'
            placeholder='Find tracks'
            value={ this.state.query }
            onChange= { this.updateQuery }
            autoComplete='false'/>
          <span onClick= { this.clearSearch } className={ iconClasses }></span>
        </div>
      </div>
    );
  }
});

var TrackSelector = React.createClass({
  handleTrackSelection: function(track) {
    console.log('Track selected', track);
  },

  render: function() {
    var trackComponents = [];
    var tracks = this.props.tracks || [];
    var len = tracks.length;

    for ( var i = 0; i < len; i++ ) {
      trackComponents.push(
        <div key={ tracks[i].id } className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
          <div className='clickable' onClick= { this.handleTrackSelection.bind(this, tracks[i]) } >
            <track track={ tracks[i] } />
          </div>
        </div>
        )
    }
    return (
      <div className="row">
        { trackComponents }
      </div>
    )
  }
})

React.render(
    <JukeboxApp />,
    document.getElementById('app')
);


