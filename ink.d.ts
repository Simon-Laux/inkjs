import { Story, InkList } from './engine/Story'
import { StoryState } from './engine/StoryState';

declare interface Inkjs {
    Story: typeof Story
    InkList: typeof InkList
    StoryState: typeof StoryState
}

declare let inkjs: Inkjs
export = inkjs
