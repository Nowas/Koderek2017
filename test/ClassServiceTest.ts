import { ClassService } from "../services/ClassService";

let assert = require('assert');
let expect = require('chai').expect;

describe('ClassService tests', function () {

    beforeEach(function () {
    });

    it('get class info test', function(done){
        var srv = new ClassService();
        var cl = srv.GetClass("id1");
        assert(cl!=null, 'got class');
        done();
    }
    )

    it('get no class info test', function(done){
        var srv = new ClassService();
        var cl = srv.GetClass(null);
        assert(cl==null, 'got class');
        done();
    }
    )
    it('get no class info test for wrong id', function(done){
        var srv = new ClassService();
        var cl = srv.GetClass("id000");
        assert(cl==null, 'got class');
        done();
    }
    )
})