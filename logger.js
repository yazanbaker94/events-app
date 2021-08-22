var sinon = require('sinon');
var EventEmitter = require('events').EventEmitter;

describe('EventEmitter', function(){
  describe('#emit()', function(){
    it('should invoke the callback', function(){
      var spy = sinon.spy();
      var emitter = new EventEmitter;

      emitter.on('pickup', spy);
      emitter.emit('pickup');
      spy.called.should.equal.true;
    })

    it('should pass arguments to the callbacks', function(){
      var spy = sinon.spy();
      var emitter = new EventEmitter;

      emitter.on('pickup', spy);
      emitter.emit('pickup', 'bar', 'baz');
      sinon.assert.calledOnce(spy);
      sinon.assert.calledWith(spy, 'bar', 'baz');
    })
  })
})