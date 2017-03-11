import { ClassService } from "../services/ClassService";
import { ClassFilter } from "../services/Models/ClassFilter";

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
    it('get classes with filter test', function(done){
        var srv = new ClassService();
        var cl = srv.GetClasses(new ClassFilter("name1"));
        assert(cl && cl.length > 0, 'got class');
        done();
    }
    )
    it('get classes with filter test no return', function(done){
        var srv = new ClassService();
        var cl = srv.GetClasses(new ClassFilter("name11"));
        assert(cl && cl.length == 0, 'got class');
        done();
    }
    )
})