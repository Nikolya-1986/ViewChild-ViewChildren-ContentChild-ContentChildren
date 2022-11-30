import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild(MessageListComponent) firstMessageViewChild!: MessageListComponent;
  @ViewChildren(MessageListComponent) allMessageViewChildren!: QueryList<MessageListComponent>;
  @ContentChild('tempMessage') tempMessage!: MessageListComponent;
  @ContentChild(MessageListComponent) firstProjectMessageContentChild!: MessageListComponent;
  @ContentChildren(MessageListComponent) allMessageContentChildren!: QueryList<MessageListComponent>;

  public messages: string[] = [
    'Message_1',
    'Message_2',
    'Message_3',
    'Message_4',
    'Message_5',
    'Message_6'
  ];

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.firstMessageViewChild.message = 'This was changed from message component\'s ngAfterViewInit metod';
    this.allMessageViewChildren.toArray().forEach(item => item.message = 'This was changed from message component, ngAfterViewInit metod');
  }

  ngAfterContentInit(): void {
    // this.tempMessage.message = 'This projected message was also changed, ngAfterContentInit metod';
    this.allMessageContentChildren.toArray().forEach(item => item.message = 'This was changed from message component, ngAfterContentInit metod');
  }

}
