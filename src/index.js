/** 할일 모델 */
class Todo {
    /**
     * 
     * @param {string} id 아이디 
     * @param {string} content 내용 
     * @param {boolean} isComplete 완료여부 
     * @param {string[]} categories 카테고리 
     * @param {string[]} tags 태그들 
     */
    constructor(id, content, isComplete, categories, tags) {
        // ...
    }
}

/**
 * 할 일을 추가할 수 있다.
 * 내용없이 추가할 수 없다.
 * @type { (todos: Todo[], todo: Todo) => void }
 */
const createTodo = (todos, todo) => {}

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 *  * @type { (todos: Todo[]) => Todo[] }
 */
const readTodos = (todos) => {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @type { (todos: Todo[], id: string, todo: Todo) => Todo }
 */
const updateTodo = (todos, id, todo) => {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @type { (todos: Todo[], id: string) => Todo }
 */
const deleteTodo = (todos, id) => {}