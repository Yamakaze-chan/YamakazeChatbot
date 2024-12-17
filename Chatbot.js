class Chatbot {
    name = null;
    data = new Object
    constructor(name = "") {
        this.name = name;
    }

    //method
    getData(tag) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            return this.data[tag];
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    setData(tag, pattern = undefined, response = undefined, action = undefined) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            if(this.data[tag]) {
                if (pattern !== undefined) {
                    let a, r, p;
                    if (typeof pattern === 'string' || typeof pattern === 'object') {
                        p = typeof pattern === 'string'?[pattern]:pattern;
                    } else {
                        throw new Error('Your input <pattern> is not string type or object type (Array), Please check again');
                    }
                    if (response !== undefined || action !== undefined) {
                        if (action) {
                            if(typeof action === 'function') {
                                a = action;
                            }
                            else {
                                throw new Error('Your input <action> is not function type, Please check again');
                            }
                        }
                        if (typeof response === 'string' || typeof response === 'object') {
                            r = typeof response === 'string'?[response]:response
                        } else {
                            throw new Error('Your input <pattern> is not string type or object type (Array), Please check again');
                        }
                        let tempData = this.data[tag];
                        if(!tempData.res) {
                            tempData.res = [];
                        }
                        if(!tempData.pat) {
                            tempData.pat = [];
                        }
                        this.data[tag] = {
                            pat: p.filter(e=>e),
                            act: a,
                            res: r.filter(e=>e)
                        }
                    } else {
                        throw new Error('Please define <respone> or <action> or both for <tag> \''+ tag + '\'');
                    }
                } else {
                    throw new Error('Pattern is what user will ask, so please have 1 pattern at least')
                }
            } else {
                throw new Error('Please define your <tag> berfore setData for it. You can define it by .setTag(\''+tag+'\')');
            }
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    addData(tag, pattern = undefined, response = undefined, action = undefined) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            if(this.data[tag]) {
                if (pattern !== undefined) {
                    let a, r, p;
                    if (typeof pattern === 'string' || typeof pattern === 'object') {
                        p = typeof pattern === 'string'?[pattern]:pattern;
                    } else {
                        throw new Error('Your input <pattern> is not string type or object type (Array), Please check again');
                    }
                    if (response !== undefined || action !== undefined) {
                        if (action) {
                            if(typeof action === 'function') {
                                a = action;
                            }
                            else {
                                throw new Error('Your input <action> is not function type, Please check again');
                            }
                        }
                        if (typeof response === 'string' || typeof response === 'object') {
                            r = typeof response === 'string'?[response]:response
                        } else {
                            throw new Error('Your input <pattern> is not string type or object type (Array), Please check again');
                        }
                        let tempData = this.data[tag];
                        if(!tempData.res) {
                            tempData.res = [];
                        }
                        if(!tempData.pat) {
                            tempData.pat = [];
                        }
                        this.data[tag] = {
                            pat: [...new Set(tempData.pat.concat(p))].filter(e=>e),
                            act: a,
                            res: [...new Set(tempData.res.concat(r))].filter(e=>e)
                        }
                    } else {
                        throw new Error('Please define <respone> or <action> or both for <tag> \''+ tag + '\'');
                    }
                } else {
                    throw new Error('Pattern is what user will ask, so please have 1 pattern at least')
                }
            } else {
                throw new Error('Please define your <tag> berfore setData for it. You can define it by .setTag(\''+tag+'\')');
            }
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    setTag(tag) {
        if(tag) {
            this.data[tag] = {
                pat: [],
                act: undefined,
                res: []
            }
        } else {
            throw new Error('Your <tag> is not defined')
        }
    }

    getAction(tag) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            return this.data[tag].act;
        } else {
            throw new Error('Your tag is not defined');
        }
    }

    setAction(tag, action) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            if (typeof action === 'function') {
                this.data[tag].act = action;
            } else {
                throw new Error('Your input <action> is not function type, Please check again');
            }
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    getResponses(tag) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            return this.data[tag].response;
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    setResponses(tag, response) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            if (typeof response === 'string' || typeof response === 'object') {
                this.data[tag].res = typeof response === 'string'?[response]:response;
            } else {
                throw new Error('Your input <response> is not string type or object type (Array), Please check again');
            }
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    addResponses(tag, response) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            if (typeof response === 'string' || typeof response === 'object') {
                if(!this.data[tag].res) {
                    this.data[tag].res = [];
                }
                this.data[tag].res = this.data[tag].res.concat(typeof response === 'string'?[response]:response);
            } else {
                throw new Error('Your input <action> is not string type or object type (Array), Please check again');
            }
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    getPatterns(tag) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            return this.data[tag].pat;
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    setPatterns(tag, pattern) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            if (typeof pattern === 'string' || typeof pattern === 'object') {
                this.data[tag].pat = typeof response === 'string'?[response]:response;
            } else {
                throw new Error('Your input <pattern> is not string type or object type (Array), Please check again');
            }
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }

    addPatterns(tag, pattern) {
        if(tag !== '' && Object.keys(this.data).includes(tag)) {
            if (typeof pattern === 'string' || typeof pattern === 'object') {
                if(!this.data[tag].pat) {
                    this.data[tag].pat = [];
                }
                this.data[tag].pat = this.data[tag].pat.concat(typeof pattern === 'string'?[pattern]:pattern);
            } else {
                throw new Error('Your input <pattern> is not string type or object type (Array), Please check again');
            }
        } else {
            throw new Error('Your <tag> is not defined');
        }
    }
      
    getBotAnswer(user_str, data)
    {
        function similarity(s1, s2) {
            var longer = s1;
            var shorter = s2;
            if (s1.length < s2.length) {
                longer = s2;
                shorter = s1;
            }
            var longerLength = longer.length;
            if (longerLength == 0) {
                return 1.0;
            }
    
            function editDistance(s1, s2) {
                s1 = s1.toLowerCase();
                s2 = s2.toLowerCase();
                var costs = new Array();
                for (var i = 0; i <= s1.length; i++) {
                    var lastValue = i;
                    for (var j = 0; j <= s2.length; j++) {
                        if (i == 0)
                            costs[j] = j;
                        else {
                            if (j > 0) {
                            var newValue = costs[j - 1];
                            if (s1.charAt(i - 1) != s2.charAt(j - 1))
                                newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                            costs[j - 1] = lastValue;
                            lastValue = newValue;
                            }
                        }
                    }
                    if (i > 0)
                    costs[s2.length] = lastValue;
                }
                return costs[s2.length];
            }
            return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
        }

        var tag = "";
        var max_simi_point = 0;
        var list_answer = [];
        console.log(Object.keys(data))
        for(let i of Object.keys(data)){
            for(var j = 0; j < data[i].pat.length; j++)
            {
                //console.log(data[i].patterns[j]);
                var simi_point = similarity(user_str, data[i].pat[j]);
                if(max_simi_point < simi_point)
                {
                    max_simi_point = simi_point;
                    tag = i;
                    list_answer = data[i].res;
                }
            }
        }
        console.log(tag, list_answer[Math.floor(Math.random()*list_answer.length)])
        return [tag, list_answer[Math.floor(Math.random()*list_answer.length)]]
    }
}