console.log('Hi there!');

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

particlesJS('particles-js', {
  'particles': {
    'number': {
      'value': 15,
      'density': {
        'enable': true,
        'value_area': 552.4120678362015
      }
    },
    'color': {
      'value': '#0d1025'
    },
    'shape': {
      'type': 'polygon',
      'stroke': {
        'width': 2.5,
        'color': '#0d1025'/*"#9d4a4a"*/
      },
      'polygon': {
        'nb_sides': 9
      },
      'image': {
        'src': 'img/github.svg',
        'width': 100,
        'height': 100
      }
    },
    'opacity': {
      'value': 0.3,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 64.67965461773755,//91
      'random': true,
      'anim': {
        'enable': true,
        'speed': 32.939189189189165,
        'size_min': 21.11486486486485,
        'sync': true
      }
    },
    'line_linked': {
      'enable': false,
      'distance': 200,
      'color': '#171c31',
      'opacity': 1,
      'width': 2
    },
    'move': {
      'enable': true,
      'speed': 8,
      'direction': 'none',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false,
      'attract': {
        'enable': false,
        'rotateX': 600,
        'rotateY': 1200
      }
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': true,
        'mode': 'repulse'
      },
      'onclick': {
        'enable': true,
        'mode': 'push'
      },
      'resize': true
    },
    'modes': {
      'grab': {
        'distance': 400,
        'line_linked': {
          'opacity': 1
        }
      },
      'bubble': {
        'distance': 400,
        'size': 40,
        'duration': 2,
        'opacity': 8,
        'speed': 3
      },
      'repulse': {
        'distance': 200,
        'duration': 0.4
      },
      'push': {
        'particles_nb': 4
      },
      'remove': {
        'particles_nb': 2
      }
    }
  },
  'retina_detect': true
});
